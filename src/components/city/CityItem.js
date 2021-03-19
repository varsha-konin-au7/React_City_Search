import React from "react";
import PropTypes from 'prop-types'

const CityItem =(props) => {

	
		const { name,icon} = props.city
		return (
			<div className="card text-center">
				<img
					src={icon}
					alt="city_image"
					className="round-img"
					style={{
						width: "50px",
						
					}}
				/>
				<h3 >{name}</h3>
			</div>
		);
	
}

CityItem.propTypes = {
	city:PropTypes.object.isRequired,
}

export default CityItem;
