import data from "../data/data";
import cloud_bad from "../img/cloud_bad.png";
import cloud_good from "../img/cloud_good.png";
import cloud_not_selected from "../img/cloud_not_selected.png";

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const generateAllPositions = (code) => {
    const allPos = [];
    if (window.innerWidth <= 600) {
        for (let i = 5; i <= 90; i += 10) {
            for (let j = 5; j <= 60; j += 35) {
                allPos.push([i, j]);
            }
        }
    } else {
        for (let i = 3; i <= 85; i += 15) {
            for (let j = 3; j <= 85; j += 15) {
                allPos.push([i, j]);
            }
        }
    }

    let shuffledPos = allPos
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

    const packs = ["firstpack", "secondpack", "thirdpack"];
    const actualPack = packs[Math.floor(Math.random() * packs.length)];

    const output = [];
    data[code][actualPack]["all_words"].map((word, idx) => {
        return output.push({ key: word, pos: shuffledPos[idx] });
    });

    return [output, data[code][actualPack]["question"], actualPack];
};

const compareAnswers = (userAnswers, wordpack, code) => {
    const result = { good: [], bad: [] };
    const points = { good: 0, bad: 0 };
    userAnswers.forEach((answer) => {
        if (!data[code][wordpack]["good_words"].includes(answer)) {
            result["bad"].push(answer);
            points["bad"] += 1;
        } else {
            result["good"].push(answer);
            points["good"] += 1;
        }
    });
    points["bad"] +=
        data[code][wordpack]["good_words"].length - result["good"].length;
    points["good"] *= 2;

    return [
        result,
        points["good"] - points["bad"],
        data[code][wordpack]["good_words"],
    ];
};

const submitAnswers = (actualPack, setScore, code) => {
    const answers = document.querySelectorAll(".word-container-active");
    const allWords = document.querySelectorAll(".word-container");
    allWords.forEach((word) => {
        word.style.pointerEvents = "none";
    });
    const userAnswers = [];
    answers.forEach((answer) => userAnswers.push(answer.innerText));
    const [result, points, good_words] = compareAnswers(
        userAnswers,
        actualPack,
        code
    );

    answers.forEach((answer) => {
        if (result["good"].includes(answer.innerText)) {
            answer.classList.remove("word-container-active");
            answer.classList.add("word-container-good");
            answer.style.backgroundImage = `url(${cloud_good})`;
        } else if (result["bad"].includes(answer.innerText)) {
            answer.classList.remove("word-container-active");
            answer.classList.add("word-container-bad");
            answer.style.backgroundImage = `url(${cloud_bad})`;
        }
    });

    allWords.forEach((word) => {
        if (
            good_words.includes(word.innerText) &&
            !result["good"].includes(word.innerText)
        ) {
            word.style.backgroundImage = `url(${cloud_not_selected})`;
        }
    });

    setScore(points);
};

export {
    capitalizeFirstLetter,
    generateAllPositions,
    compareAnswers,
    submitAnswers,
};
