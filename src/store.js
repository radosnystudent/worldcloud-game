import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducers";
import { gameReducer } from "./reducers/gameReducers";

const reducer = combineReducers({
    user: userReducer,
    game: gameReducer,
});

const initialState = {
    user: { username: "" },
    game: { language: { code: "gb", size: "2x" } },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
