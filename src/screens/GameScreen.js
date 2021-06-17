import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Button from "../components/Button";
import Word from "../components/Word";
import { reset } from "../actions/userActions";
import { generateAllPositions, submitAnswers } from "../utils/functions";
import allText from "../data/textData";

const GameScreen = ({ history }) => {
    const [score, setScore] = useState();
    const [words, setWords] = useState();
    const [question, setQuestion] = useState();
    const [actualPack, setPack] = useState();

    const [gameGenerated, setGenerated] = useState(false);
    const { username } = useSelector((state) => state.user);
    const { language } = useSelector((state) => state.game);

    useEffect(() => {
        if (!gameGenerated) {
            const [twords, tquestion, tactualPack] = generateAllPositions(
                language.code
            );
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
            <h1>{`${
                allText[language.code]["gamepage"]["welcome"]
            } ${username}!`}</h1>

            <h3>
                {allText[language.code]["gamepage"]["title"]} {question}
            </h3>

            {score ? (
                <h3
                    className={
                        score > 0
                            ? "points points-success"
                            : "points points-fail"
                    }
                >
                    {`${allText[language.code]["gamepage"]["score"]} ${score}`}
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
                <h2>{allText[language.code]["gamepage"]["rules_title"]}</h2>
                <p>{allText[language.code]["gamepage"]["rules_text"]}</p>
                <div className="separator"></div>

                {score ? (
                    <p>
                        {
                            allText[language.code]["gamepage"][
                                "rules_score_part1"
                            ]
                        }{" "}
                        <span style={{ color: "#35ca4e" }}>
                            {
                                allText[language.code]["gamepage"][
                                    "rules_score_part2"
                                ]
                            }
                        </span>{" "}
                        {
                            allText[language.code]["gamepage"][
                                "rules_score_part3"
                            ]
                        }
                        <span style={{ color: "#bb303f" }}>
                            {
                                allText[language.code]["gamepage"][
                                    "rules_score_part4"
                                ]
                            }
                        </span>{" "}
                        {
                            allText[language.code]["gamepage"][
                                "rules_score_part5"
                            ]
                        }{" "}
                        <span style={{ color: "#6c6c6c" }}>
                            {
                                allText[language.code]["gamepage"][
                                    "rules_score_part6"
                                ]
                            }
                        </span>
                        {
                            allText[language.code]["gamepage"][
                                "rules_score_part7"
                            ]
                        }
                    </p>
                ) : null}
            </div>

            <Button
                onCLick={() =>
                    submitAnswers(actualPack, setScore, language.code)
                }
                label={allText[language.code]["gamepage"]["check_button"]}
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
