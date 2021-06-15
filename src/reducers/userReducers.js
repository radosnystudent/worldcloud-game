import {
	SET_USER_NICKNAME_SUCCESS,
	SET_USER_NICKNAME_FAILURE,
	SET_USER_NICKNAME_RESET
} from "../constants/actions";

export const userReducer = (state = { username: "" }, action) => {
	switch (action.type) {
		case SET_USER_NICKNAME_SUCCESS:
			return {
				...state,
				username: action.payload
			};
		case SET_USER_NICKNAME_FAILURE:
			return {
				...state,
				error: action.payload
			};
		case SET_USER_NICKNAME_RESET:
			return {
				username: "",
				error: ""
			};
		default:
			return state;
	}
};
