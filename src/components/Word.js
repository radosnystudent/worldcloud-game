import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import cloud_blue from "../img/cloud_blue.png";
import cloud from "../img/cloud.png";

const Word = ({ children, top, left }) => {
    const [isActive, setActive] = useState(false);
    const [actualStyle, setStyle] = useState(`url(${cloud})`);
    const ref = useRef();
    const { language } = useSelector((state) => state.game);

    const style = {
        gb: { fontSize: "22px", transform: "translate(-5%, 110%)" },
        pl: { fontSize: "16px", transform: "translate(-5%, 160%)" },
    };

    useEffect(() => {
        if (ref.current.classList.contains("word-container-active")) {
            setStyle(`url(${cloud_blue})`);
        } else {
            setStyle(`url(${cloud})`);
        }
    }, [isActive]);

    return (
        <div
            className={
                isActive
                    ? "word-container word-container-active"
                    : "word-container"
            }
            style={{
                top: top,
                left: left,
                backgroundImage: actualStyle,
            }}
            onClick={() => setActive(!isActive)}
            ref={ref}
        >
            <div className="word" style={style[language.code]}>
                {children}
            </div>
        </div>
    );
};

export default Word;
