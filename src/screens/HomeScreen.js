import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUsername, reset } from "../actions/userActions";
import { changeLanguage } from "../actions/gameActions";
import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";
import { capitalizeFirstLetter } from "../utils/functions";
import allText from "../data/textData";
import FlagIcon from "../data/flagIcon";

const HomeScreen = ({ history }) => {
    const [isSubmited, setSubmit] = useState(false);
    const { language } = useSelector((state) => state.game);
    const [flag, setFlag] = useState(language);
    const dispatch = useDispatch();

    const { error: usernameError, username } = useSelector(
        (state) => state.user
    );
    const [nickname, setNickname] = useState(username);

    useEffect(() => {
        if (isSubmited && !usernameError) {
            history.push("/game");
        }
    }, [isSubmited, usernameError, history]);

    const submitUsername = useCallback(() => {
        reset();
        if (nickname) {
            setSubmit(true);
        }
        dispatch(setUsername(capitalizeFirstLetter(nickname)));
    }, [nickname]);

    const alertClose = () => {
        dispatch(reset());
        setSubmit(false);
    };

    const swapLanguage = () => {
        if (flag.code === "gb") {
            const newLanguage = { code: "pl", size: "2x" };
            setFlag(newLanguage);
            dispatch(changeLanguage(newLanguage));
        } else {
            const newLanguage = { code: "gb", size: "2x" };
            setFlag(newLanguage);
            dispatch(changeLanguage(newLanguage));
        }
    };

    return (
        <div className="page-container">
            <div className="flag-wrapper" onClick={() => swapLanguage()}>
                <FlagIcon
                    code={flag.code}
                    size={flag.size}
                    className="flag-item"
                />
            </div>
            <div className="homepage-content">
                <h1 className="page-title">
                    {allText[language.code]["homepage"]["title"]}
                </h1>
                <Input value={nickname} setNickname={setNickname} />

                <Button
                    onCLick={submitUsername}
                    label={allText[language.code]["homepage"]["submit_button"]}
                />
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
