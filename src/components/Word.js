import { useState, useRef, useEffect } from "react";
import cloud_blue from "../img/cloud_blue.png";
import cloud from "../img/cloud.png";

const Word = ({ children, top, left }) => {
    const [isActive, setActive] = useState(false);
    const [actualStyle, setStyle] = useState(`url(${cloud})`);
    const ref = useRef();

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
            <div className="word">{children}</div>
        </div>
    );
};

export default Word;
