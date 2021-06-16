import {
	SET_USER_NICKNAME_FAILURE,
	SET_USER_NICKNAME_SUCCESS,
	SET_USER_NICKNAME_RESET
} from "../constants/actions";

export const setUsername = (username) => (dispatch) => {
	if (username && username.length > 0) {
		dispatch({
			type: SET_USER_NICKNAME_SUCCESS,
			payload: username
		});
	} else {
		dispatch({
			type: SET_USER_NICKNAME_FAILURE,
			payload: "Invalid username"
		});
	}
};

export const reset = () => async (dispatch) => {
	dispatch({
		type: SET_USER_NICKNAME_RESET
	});
};
