import { CHANGE_LANGUAGE } from "../constants/actions";

export const changeLanguage = (language) => (dispatch) => {
    dispatch({
        type: CHANGE_LANGUAGE,
        payload: language,
    });
};
