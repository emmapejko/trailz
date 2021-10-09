import React, { useState } from 'react';

import {
  RatingsTrail,
 } from '../../styles/ratingsStyles';

const RatingsItem = ({ fav }) => {
  const [ Rating, setRating ] = useState('Rate!');
  const getRating = (event) => {
    setRating(event.target.value);
  }

  return (
    <div>
      <RatingsTrail>
        <ol
        className="list-group testing">
            <li
            key={fav._id}
            style={{ backgroundColor: '#778899' }}
            className="list-group-item d-flex justify-content-between align-items-start" >
              <div
              className="ms-2 me-auto">
                <div
                className="fw-bold"
                >{fav.name}</div>
                LAT: {fav.location.lat}
                <br />
                LNG: {fav.location.lng}
                <br />
                <label
                htmlFor={fav._id}>
                Rate Trail:
                  <select
                  defaultValue={ Rating }
                  onChange={ getRating }>
                    <option
                    value="Rate!"
                    >Rate!</option>
                    <option
                    value="⭐"
                    >1 Star</option>
                    <option
                    value="⭐⭐"
                    >2 Stars</option>
                    <option
                    value="⭐⭐⭐"
                    >3 Stars</option>
                    <option
                    value="⭐⭐⭐⭐"
                    >4 Stars</option>
                    <option
                    value="⭐⭐⭐⭐⭐"
                    >5 Stars</option>
                  </select>
                </label>
                  <div
                  className="form-group form-check">
                    <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    />
                    <label
                    className="form-check-label"
                    >Handicap Access?</label>
                  </div>
                </div>
                <span
                key={fav._id}
                value={fav.name}
                onChange={() => this.handleChange(fav.name)}
                className="badge bg-primary rounded-pill"
                >{ Rating }</span>
            </li>
        </ol>
      </RatingsTrail>
    </div>
  );
};

export default RatingsItem;
