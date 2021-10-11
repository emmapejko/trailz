
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpeciesSearch = () => {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');

  const speciesApiUrl = 'https://explorer.natureserve.org/api/data/taxonSearch?ouSeqUid=ELEMENT_GLOBAL.2.154701'
	const postApiUrl = 'https://explorer.natureserve.org/api/data/search'


  useEffect(() => {
    axios.get(speciesApiUrl)
    .then((data) => {
      console.log('animals data: ', data)
      setApiData(data.data)});
    },
		[speciesApiUrl]);

		useEffect(() => {
			axios.get(postApiUrl)
			.then((data) => {
				console.log('search results: ', data)
				setApiData(data.data)
			})
		}, [postApiUrl]);






	const inputHandler = (event) => {
		setGetState(event.target.value);
	};
	
	const submitHandler = () => {
		setState(setGetState);
	};


  return (
		<div className="Species">
			<header className="d-flex justify-content-center align-items-center">
				<h2>Look It Up!</h2>
			</header>
			<div className="container">
				<div className="mt-3 d-flex flex-column justify-content-center align-items-center">
					<div className="col-auto">
						<label htmlFor="species-name" className="col-form-label">
						</label>
					</div>
					<div className="col-auto">
						<input
							type="text"
							id="species-name"
							className="form-control"
							onChange={inputHandler}
							value={getState}
						/>
					</div>
					<button className="btn btn-primary mt-2" onClick={submitHandler}>
						Search
					</button>
				</div>
			</div>

			<div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
					{apiData.formattedScientificName ? (
						<div className="card-body text-center">
							<img
								src={`https://explorer.natureserve.org/api/data/`}
								alt="species photo"
								className="species-icon"
							/>
							<p className="h2">
							</p>
							<p className="h5">
								<strong>{apiData.formattedScientificName}</strong>
							</p>
						</div>
					) : (
						<h1>Loading....</h1>
					)}
				</div>
		</div>
  )
};

export default SpeciesSearch;