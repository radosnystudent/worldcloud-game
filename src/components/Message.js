import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children, onClose }) => {
	return (
		<Alert
			className="myAlert"
			variant={variant}
			dismissible
			onClose={onClose}
		>
			{children}
		</Alert>
	);
};

Message.defaultProps = {
	variant: "info"
};

export default Message;
