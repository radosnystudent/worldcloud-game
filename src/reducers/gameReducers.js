import { CHANGE_LANGUAGE } from "../constants/actions";

export const gameReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                language: action.payload,
            };
        default:
            return state;
    }
};
