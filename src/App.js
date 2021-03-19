import "./App.css";
import Cities from "./components/city/Cities";
import NavBar from "./components/NavBar";
import axios from "axios";
import React, { Component } from "react";
import Search from "./components/city/Search";

export class App extends Component {
	state = {
		cities: [],
		searchCity: "",
		setTrueForHDEnable: false,
		setTrueForOneWay: false,
		allCities: [],
	};
	async componentDidMount() {
		this.setState({
			loading: true,
			oneWay: false,
			hdEnabled: false,
		});
		const res = await axios.get(
			"https://api.zoomcar.com/v4/cities?platform=web"
		);
		console.log(res.data);

		this.setState({
			cities: res.data.cities,
			allCities: res.data.cities,
		});
	}

	setHDEnabled = (e) => {
		this.setState({
			setTrueForHDEnable: !this.state.setTrueForHDEnable,
		});
		// console.log("hd enable",this.state.setTrueForHDEnable)
	};

	setOneWay = () => {
		this.setState({
			setTrueForOneWay: !this.state.setTrueForOneWay,
		});
		// console.log("one way enable",this.state.setTrueForOneWay)
	};
	searchCity = (text) => {
		let cities = [];

		this.state.allCities.filter((city) => {
			if (city.name.toLowerCase().includes(text.toLowerCase())) {
				console.log(city.name);
				cities.push(city);
			}
		});

		this.setState({
			cities: cities,
		});
	};

	render() {
		return (
			<div>
				<div className="App">
					<NavBar title="CITIES" icon="fas fa-city" />

					<div className="container">
						<Search searchCity={this.searchCity} />

						<div className="filter">
							<input
								type="checkbox"
								defaultChecked={this.state.setTrueForHDEnable}
								onChange={this.setHDEnabled}
							/>{" "}
							HD_ENABLED
							<input
								type="checkbox"
								defaultChecked={this.state.setTrueForOneWay}
								onChange={this.setOneWay}
							/>{" "}
							ONE_ENABLED
						</div>

						<Cities
							cities={this.state.cities}
							oneWay={this.state.setTrueForOneWay}
							hdEnabled={this.state.setTrueForHDEnable}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
