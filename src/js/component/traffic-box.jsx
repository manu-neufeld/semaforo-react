import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";

import PropTypes from "prop-types";

import { TrafficLigths } from "./traffic-lights.jsx";

export const TrafficBox = () => {
	const [redColor, setRedColor] = useState("");
	const [yellowColor, setYellowColor] = useState("");
	const [greenColor, setGreenColor] = useState("");

	return (
		<div className="rounded bg-dark box">
			<div
				class={"rounded-circle light " + redColor}
				onClick={() => {
					setRedColor("bg-danger");
					setYellowColor("");
					setGreenColor("");
				}}>
				<TrafficLigths />
			</div>
			<div
				class={"rounded-circle light " + yellowColor}
				onClick={() => {
					setYellowColor("bg-warning");
					setRedColor("");
					setGreenColor("");
				}}>
				<TrafficLigths />
			</div>
			<div
				class={"rounded-circle light " + greenColor}
				onClick={() => {
					setRedColor("");
					setYellowColor("");
					setGreenColor("bg-success");
				}}>
				<TrafficLigths />
			</div>
		</div>
	);
};

TrafficBox.propTypes = {
	redLigth: PropTypes.string,
	yellowLigth: PropTypes.string,
	greenLight: PropTypes.string
};
