import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUsername, reset } from "../actions/userActions";
import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";
import { capitalizeFirstLetter } from "../utils/functions";

const HomeScreen = ({ history }) => {
	const [nickname, setNickname] = useState("");
	const [isSubmited, setSubmit] = useState(false);
	const dispatch = useDispatch();

	const { error: usernameError } = useSelector((state) => state.user);

	useEffect(() => {
		if (isSubmited && !usernameError) {
			history.push("/game");
		}
	}, [isSubmited, usernameError, history]);

	const submitUsername = () => {
		reset();
		if (nickname) {
			setSubmit(true);
		}
		dispatch(setUsername(capitalizeFirstLetter(nickname)));
	};

	const alertClose = () => {
		reset();
		setSubmit(false);
	};

	return (
		<div className="page-container">
			<div className="homepage-content">
				<h1 className="page-title">Worldcloud Game</h1>
				<Input setNickname={setNickname} />

				<Button onCLick={submitUsername} label="Submit" />
			</div>
			{usernameError ? (
				<Message onClose={alertClose} variant="danger">
					{usernameError}
				</Message>
			) : null}
		</div>
	);
};

export default HomeScreen;
