import React from "react";
import PropTypes from "prop-types";

export const TrafficLigths = props => {
	// const [redColor, setRedColor] = useState("");

	return <div className={props.class} />;
};
TrafficLigths.propTypes = {
	class: PropTypes.string
};
