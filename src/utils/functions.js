import data from "../data/data";

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const generateAllPositions = () => {
	const allPos = [];
	for (let i = 3; i <= 85; i += 15) {
		for (let j = 3; j <= 85; j += 15) {
			allPos.push([i, j]);
		}
	}

	let shuffledPos = allPos
		.map((a) => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value);

	const packs = ["firstpack", "secondpack", "thirdpack"];
	const actualPack = packs[Math.floor(Math.random() * packs.length)];

	const output = [];
	data[actualPack]["all_words"].map((word, idx) => {
		return output.push({ key: word, pos: shuffledPos[idx] });
	});

	return [output, data[actualPack]["question"], actualPack];
};

const compareAnswers = (userAnswers, wordpack) => {
	const result = { good: [], bad: [] };
	const points = { good: 0, bad: 0 };
	userAnswers.forEach((answer) => {
		if (!data[wordpack]["good_words"].includes(answer)) {
			result["bad"].push(answer);
			points["bad"] += 1;
		} else {
			result["good"].push(answer);
			points["good"] += 1;
		}
	});
	points["bad"] +=
		data[wordpack]["good_words"].length - result["good"].length;
	points["good"] *= 2;

	return [result, points["good"] - points["bad"]];
};

const submitAnswers = (actualPack, setScore) => {
	const answers = document.querySelectorAll(".word-container-active");
	const allWords = document.querySelectorAll(".word-container");
	allWords.forEach((word) => {
		word.style.pointerEvents = "none";
	});
	const userAnswers = [];
	answers.forEach((answer) => userAnswers.push(answer.innerText));
	const [result, points] = compareAnswers(userAnswers, actualPack);
	answers.forEach((answer) => {
		if (result["good"].includes(answer.innerText)) {
			answer.classList.remove("word-container-active");
			answer.classList.add("word-container-good");
		} else if (result["bad"].includes(answer.innerText)) {
			answer.classList.remove("word-container-active");
			answer.classList.add("word-container-bad");
		}
	});
	setScore(points);
};

export {
	capitalizeFirstLetter,
	generateAllPositions,
	compareAnswers,
	submitAnswers
};
