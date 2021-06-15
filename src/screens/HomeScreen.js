import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUsername } from "../actions/userActions";
import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";
import { SET_USER_NICKNAME_RESET } from "../constants/actions";

const HomeScreen = () => {
	const [nickname, setNickname] = useState("");
	const [isSubmited, setSubmit] = useState(false);
	const dispatch = useDispatch();

	const { error: usernameError } = useSelector((state) => state.user);

	useEffect(() => {
		if (isSubmited) {
			dispatch(setUsername(nickname));
		}
	}, [nickname, dispatch, isSubmited]);

	const alertClose = () => {
		dispatch({ type: SET_USER_NICKNAME_RESET });
		setSubmit(false);
	};

	return (
		<div className="homepage-container">
			<div className="homepage-content">
				<h1>Worldcloud Game</h1>
				<Input setNickname={setNickname} />
				<Button onCLick={() => setSubmit(true)} label="Submit" />
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
