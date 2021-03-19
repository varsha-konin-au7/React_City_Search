import React, { Component } from "react";

class Search extends Component {
	state = {
		text: "",
	};
	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = (e) => {
		// console.log(this.props)
		e.preventDefault();
		this.props.searchCity(this.state.text);
		this.setState({ text: "" });
	};

	render() {
		return (
			<>
				<form className="form" onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="text"
						placeholder="Search city..."
						value={this.state.text}
						onChange={this.handleChange}
					/>
					<input type="submit" value="Search" className="btn btn-dark " />
				</form>
			</>
		);
	}
}

export default Search;
