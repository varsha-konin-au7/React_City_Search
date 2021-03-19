import React from "react";
import CityItem from "./CityItem";
import PropTypes from "prop-types";

const Cities = ({ cities, oneWay, hdEnabled }) => {
	console.log("oneWay, hdEnabled ==>> ", oneWay, hdEnabled, cities);
	return (
		<>
			<div>{<h3>Popular</h3>}</div>
			<div style={cityStyle}>
				{cities.map((city) => {
					if (city.popular) {
						if (oneWay && !hdEnabled) {
							if (city.one_way_enabled) {
								return <CityItem key={city.id} city={city} />;
							}
						} else if (!oneWay && hdEnabled) {
							if (city.hd_enabled) {
								return <CityItem key={city.id} city={city} />;
							}
						} else if (oneWay && hdEnabled) {
							if (city.hd_enabled && city.one_way_enabled) {
								return <CityItem key={city.id} city={city} />;
							}
						} else {
							return <CityItem key={city.id} city={city} />;
						}
					}
				})}
			</div>
			<br />
			<br />
			<div>
				<h3>Others</h3>
			</div>
			<div style={cityStyle}>
				{cities.map((city) => {
					if (!city.popular) {
						if (oneWay && !hdEnabled) {
							if (city.one_way_enabled) {
								return <CityItem key={city.id} city={city} />;
							}
						} else if (!oneWay && hdEnabled) {
							if (city.hd_enabled) {
								return <CityItem key={city.id} city={city} />;
							}
						} else if (oneWay && hdEnabled) {
							if (city.hd_enabled && city.one_way_enabled) {
								return <CityItem key={city.id} city={city} />;
							}
						} else {
							return <CityItem key={city.id} city={city} />;
						}
					}
				})}
			</div>
		</>
	);
};

Cities.propTypes = {
	cities: PropTypes.array.isRequired,
};

const cityStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(4,1fr)",
	gridGap: "3rem",
};

export default Cities;
