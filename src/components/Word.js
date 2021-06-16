import { useState } from "react";

const Word = ({ children, top, left, right }) => {
	const [isActive, setActive] = useState(false);

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
				right: right
			}}
			onClick={() => setActive(!isActive)}
		>
			<div className="word">{children}</div>
		</div>
	);
};

export default Word;
