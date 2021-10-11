/* eslint-disable no-unused-vars */
/* eslint-disable */
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { OPEN_WEATHER_API_KEY } from '../../../../server/google-maps/API';
import weatherStyles from '../../styles/weatherStyles.js';

const Weather = () => {
	
	const [apiData, setApiData] = useState({});
	const [getState, setGetState] = useState('');
	const [state, setState] = useState('new orleans')

	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${OPEN_WEATHER_API_KEY}`;

useEffect(() => {
  axios.get(apiUrl)
    .then((data) => {
			console.log('data: ', data.data)
			setApiData(data.data)})
		
}, [apiUrl]);



	const inputHandler = (event) => {
		setGetState(event.target.value);
	};
	
	const submitHandler = () => {
		setState(getState);
	};

	const kelvinToFarenheit = (k) => {
		return Math.round((k - 273.15) * 9/5 + 32 );
	};

	return (
		<div className="Weather">
			<header className="d-flex justify-content-center align-items-center">
				<h2>What's the Weather Like?</h2>
			</header>
			<div className="container">
				<div className="mt-3 d-flex flex-column justify-content-center align-items-center">
					<div className="col-auto">
						<label htmlFor="location-name" className="col-form-label">
							Search City: 
						</label>
					</div>
					<div className="col-auto">
						<input
							type="text"
							id="location-name"
							className="form-control"
							onChange={inputHandler}
							value={getState}
						/>
					</div>
					<button className="btn btn-primary mt-2" onClick={submitHandler}>
						Search
					</button>
				</div>
	
				<div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
					{apiData.main ? (
						<div className="card-body text-center">
							<img
								src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
								alt="weather status icon"
								className="weather-icon"
							/>
	
							<p className="h2">
								{kelvinToFarenheit(apiData.main.temp)}&deg; F
							</p>
	
							<p className="h5">
								<i className="fas fa-map-marker-alt"></i>{' '}
								<strong>{apiData.name}</strong>
							</p>
	
							<div className="row mt-4">
								<div className="col-md-6">
									<p>
										<i className="fas fa-temperature-low ">low: </i>{' '}
										<strong>
											{kelvinToFarenheit(apiData.main.temp_min)}&deg; F
										</strong>
									</p>
									<p>
										<i className="fas fa-temperature-high">high: </i>{' '}
										<strong>
											{kelvinToFarenheit(apiData.main.temp_max)}&deg; F
										</strong>
									</p>
								</div>
								<div className="col-md-6">
									<p>
										{' '}
										<strong>{apiData.weather[0].main}</strong>
									</p>

								</div>
							</div>
						</div>
					) : (
						<h1>Loading....</h1>
					)}
				</div>
			</div>
		
		</div>
	);

}


export default Weather;