import { useSelector } from "react-redux";

import Button from "../components/Button";
import Word from "../components/Word";
import { reset } from "../actions/userActions";
import { generateAllPositions, submitAnswers } from "../utils/functions";
import { useState } from "react";

const GameScreen = ({ history }) => {
	const [score, setScore] = useState();
	const { username } = useSelector((state) => state.user);
	const [words, question, actualPack] = generateAllPositions();

	if (!username || username.length === 0) {
		history.push("/");
	}

	return (
		<div className="page-container" style={{ height: "100%" }}>
			<h1>{`Witaj ${username}!`}</h1>
			<h3>{question}</h3>
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
				{words.map((word, idx) => {
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
