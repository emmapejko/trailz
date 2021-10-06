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
  return (
    <div>
      <ol className="list-group list-group-numbered">
        {
          this.props.favorites.map((fav) => (
            <RatingsItem
            key={fav._id}
            fav={fav}
            />
          ))
        }
      </ol>
    </div>
    );
  };
};
export default Ratings;
