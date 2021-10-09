/* eslint-disable */
import React, { useState } from 'react';
import RatingsItem from '../Pages/RatingsItem.jsx'


const Ratings = ({ favorites }) => {

  return (
    <div>
      <h1
      style ={{
      backgroundColor: '#778899',
      marginBottom: 0,
      color: '#2E8B57', fontFamily: 'Helvetica Neue', fontSize: 100, fontWeight: 'bold', letterSpacing: -1, lineHeight: 1, textAlign: 'center', }}>RATINGS</h1>
        {
          favorites.map((fav) => (
            <RatingsItem
            key={fav._id}
            fav={fav}
            />
          ))
        }
    </div>
    );
};

export default Ratings;
