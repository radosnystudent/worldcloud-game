import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUsername } from "../actions/userActions";
import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";
import { SET_USER_NICKNAME_RESET } from "../constants/actions";

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

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
		setSubmit(true);
		dispatch(setUsername(capitalizeFirstLetter(nickname)));
	};

	const alertClose = () => {
		dispatch({ type: SET_USER_NICKNAME_RESET });
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
