import React from 'react';

import logodua from './Google.png';

const Form = props => (
	<form onSubmit={props.getWeather}>
	<img src={logodua} className="logo2" alt="pict"/> 
		<input
		type="text"
		className="inputan"
		name="city"
		placeholder="City"
		/>
		<input
		type="text"
		className="inputan"
		name="country"
		placeholder="Country"
		/>
		<button className="btn2">Get Weather</button>
	</form>
);

export default Form;