import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../components/Button";
import Word from "../components/Word";
import { reset } from "../actions/userActions";
import { generateAllPositions, submitAnswers } from "../utils/functions";

const GameScreen = ({ history }) => {
    const [score, setScore] = useState();
    const [words, setWords] = useState();
    const [question, setQuestion] = useState();
    const [actualPack, setPack] = useState();

    const [gameGenerated, setGenerated] = useState(false);
    const { username } = useSelector((state) => state.user);

    useEffect(() => {
        if (!gameGenerated) {
            const [twords, tquestion, tactualPack] = generateAllPositions();
            setWords(twords);
            setQuestion(tquestion);
            setPack(tactualPack);
            setGenerated(true);
        }
    }, [gameGenerated]);

    if (!username || username.length === 0) {
        history.push("/");
    }

    return (
        <div
            className="page-container game-interface-container"
            style={{ height: "100%" }}
        >
            <h1>{`Witaj ${username}!`}</h1>
            <h3>Task: {question}</h3>
            {score ? (
                <h3
                    className={
                        score > 0
                            ? "points points-success"
                            : "points points-fail"
                    }
                >
                    Your score: {score}
                </h3>
            ) : null}
            <div className="game-container">
                {words &&
                    words.map((word, idx) => {
                        return (
                            <Word
                                top={`${word.pos[0]}%`}
                                left={`${word.pos[1]}%`}
                                key={`word-${idx}`}
                            >
                                {word.key}
                            </Word>
                        );
                    })}
            </div>

            <div className="side-panel">
                <h2>Rules</h2>
                <p>
                    Select all words that are answers to the question above
                    board and hit button 'CHECK ANSWERS'.
                </p>
                <div className="separator"></div>
                {score ? (
                    <p>
                        Score ={" "}
                        <span style={{ color: "#35ca4e" }}>(good answers)</span>{" "}
                        * 2 - (
                        <span style={{ color: "#bb303f" }}>wrong answers</span>{" "}
                        +{" "}
                        <span style={{ color: "#6c6c6c" }}>
                            correct words that were not marked
                        </span>
                        ).
                    </p>
                ) : null}
            </div>
            <Button
                onCLick={() => submitAnswers(actualPack, setScore)}
                label="Check answers"
            />
            <Button
                onCLick={() => {
                    reset();
                    history.push("/");
                }}
                label="Menu"
            />
        </div>
    );
};

export default GameScreen;
