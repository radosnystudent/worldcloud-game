import { useState } from "react";

const Word = ({ children, top, left, right }) => {
	const [isActive, setActive] = useState(true);

	return (
		<div
			style={{ top: top, left: left, right: right }}
			className={isActive ? "word word-black" : "word word-red"}
			onClick={() => setActive(!isActive)}
		>
			{children}
		</div>
	);
};

export default Word;
