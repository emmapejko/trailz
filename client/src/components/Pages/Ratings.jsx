/* eslint-disable */
import React, { useState } from 'react';
import RatingsItem from '../Pages/RatingsItem.jsx'
// import axios from 'axios';

class Ratings extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      selectValue: 'Rate!',
    }
  }


  render() {
    const styles = { backroundImage: `url(https://i.pinimg.com/564x/28/c9/97/28c99792c0e2fab690be4f3241fd7836.jpg)`,
      backgroundColor: '#778899',
      marginBottom: 0,
      color: '#2E8B57', fontFamily: 'Helvetica Neue', fontSize: 100, fontWeight: 'bold', letterSpacing: -1, lineHeight: 1, textAlign: 'center', }
  return (
    <div>
      <h1 style ={styles}>RATINGS</h1>
        {
          this.props.favorites.map((fav) => (
            <RatingsItem

            key={fav._id}
            fav={fav}
            />
          ))
        }

    </div>
    );
  };
};
export default Ratings;
