const Button = ({ onCLick, label }) => {
	return (
		<button className="my-btn" onClick={onCLick}>
			{label}
		</button>
	);
};

export default Button;
