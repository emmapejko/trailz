
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpeciesSearch = () => {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');

  const speciesApiUrl = 'https://explorer.natureserve.org/api/data/taxonSearch?ouSeqUid=ELEMENT_GLOBAL.2.154701'


  useEffect(() => {
    axios.get(speciesApiUrl)
    .then((data) => {
      console.log('animals data: ', data)
      setApiData(data.data)});
    }, [speciesApiUrl]);


	const inputHandler = (event) => {
		setGetState(event.target.value);
	};
	
	const submitHandler = () => {
		setState(getState);
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
		
		</div>
  )
};

export default SpeciesSearch;