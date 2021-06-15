const Input = ({ setNickname }) => {
	return (
		<input
			onChange={(e) => setNickname(e.target.value)}
			type="text"
			placeholder="Enter your nickname here..."
		/>
	);
};

export default Input;
