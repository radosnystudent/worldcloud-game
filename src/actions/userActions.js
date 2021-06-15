import {
	SET_USER_NICKNAME_FAILURE,
	SET_USER_NICKNAME_SUCCESS
} from "../constants/actions";

export const setUsername = (username) => async (dispatch) => {
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
