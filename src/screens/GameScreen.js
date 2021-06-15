// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/Button";
import Word from "../components/Word";
import { SET_USER_NICKNAME_RESET } from "../constants/actions";
import data from "../data/data";

// const packs = ["firstpack", "secondpack", "thirdpack"];

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GameScreen = ({ history }) => {
	const { username } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	if (!username || username.length === 0) {
		history.push("/");
	}

	return (
		<div className="page-container" style={{ height: "100%" }}>
			<h1>{`Witaj ${username}!`}</h1>

			<div className="game-container">
				{data["firstpack"]["all_words"].map((item, idx) => {
					return (
						<Word
							top={`${getRandomInt(0, 90)}%`}
							left={`${getRandomInt(0, 90)}%`}
							key={`word-${idx}`}
						>
							{item}
						</Word>
					);
				})}
			</div>
			<Button
				onCLick={() => {
					console.log("UwU");
				}}
				label="Check answers"
			/>
			<Button
				onCLick={() => {
					dispatch({ type: SET_USER_NICKNAME_RESET });
					history.push("/");
				}}
				label="Menu"
			/>
		</div>
	);
};

export default GameScreen;
