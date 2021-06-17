import { useSelector } from "react-redux";

import allText from "../data/textData";

const Input = ({ setNickname, value }) => {
    const { language } = useSelector((state) => state.game);

    return (
        <input
            onChange={(e) => setNickname(e.target.value)}
            type="text"
            placeholder={allText[language.code]["homepage"]["placeholder"]}
            value={value}
        />
    );
};

export default Input;
