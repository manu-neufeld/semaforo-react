import React, { useState } from "react";

export const TrafficBox = () => {
	const [redColor, setRedColor] = useState("");
	const [yellowColor, setYellowColor] = useState("");
	const [greenColor, setGreenColor] = useState("");

	return (
		<div className="box">
			<div
				className={"rounded-circle light " + redColor}
				onClick={() => {
					setRedColor("bg-danger");
					setYellowColor("");
					setGreenColor("");
				}}
			/>
			<div
				className={"rounded-circle light " + yellowColor}
				onClick={() => {
					setYellowColor("bg-warning");
					setRedColor("");
					setGreenColor("");
				}}
			/>
			<div
				className={"rounded-circle light " + greenColor}
				onClick={() => {
					setRedColor("");
					setYellowColor("");
					setGreenColor("bg-success");
				}}
			/>
		</div>
	);
};
