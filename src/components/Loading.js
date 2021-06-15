import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = ({ size }) => {
	return (
		<Spinner
			animation="border"
			role="status"
			style={{
				width: size,
				height: size,
				margin: "auto",
				display: "block"
			}}
		>
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
};

export default Loading;
