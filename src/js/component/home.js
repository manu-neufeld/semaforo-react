import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import { TrafficTop } from "./traffic-top.jsx";
import { TrafficBox } from "./traffic-box.jsx";

//create your first component
export function Home() {
	return (
		<div className="mt-5">
			<TrafficTop />
			<TrafficBox />
		</div>
	);
}
