import React, { Component } from "react";

class Filter extends Component {
	render() {
		return (
			<div className="filter">
				<input type="checkbox" value="HD_ENABLED" /> HD_ENABLED
				<input type="checkbox" value="ONE_ENABLED" /> ONE_ENABLED
			</div>
		);
	}
}

export default Filter;
