import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";

import PropTypes from "prop-types";

import { TrafficLigths } from "./traffic-lights.jsx";

export const TrafficBox = () => {
	// const [turnedOff, setTurnedOff] = useState("");
	const [redColor, setRedColor] = useState("");
	const [yellowColor, setYellowColor] = useState("");
	const [greenColor, setGreenColor] = useState("");

	// class={"rounded-circle light " + redColor}

	return (
		<div className="rounded bg-dark box">
			<div
				class={"rounded-circle light " + redColor}
				onClick={() => setRedColor("bg-danger")}>
				<TrafficLigths />
			</div>
			<div
				class={"rounded-circle light " + yellowColor}
				onClick={() => setYellowColor("bg-warning")}>
				<TrafficLigths />
			</div>
			<div
				class={"rounded-circle light " + greenColor}
				onClick={() => setGreenColor("bg-success")}>
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
