/* eslint-disable */
/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-key */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
// import axios from 'axios';

class Ratings extends React.Component {
  // console.log(favorites, 'favs');
  // console.log(user, 'user');
  // const [rating] = useState(0);
  //{ user, favorites }
  constructor(props) {
    super(props)


    this.state = {
      values: [
        { name: 'select', id: 0 },
        { name: '1 Star', id: 1 },
        { name: '2 Star', id: 2 },
        { name: '3 Star', id: 3 },
        { name: '4 Star', id: 4 },
        { name: '5 Star', id: 5 }
      ]
    }
    //bind area
    //this.handleChange = this.handleChange.bind(this);
  }

  // const getRating = (star) => {
  //   switch (star) {
  //   case '1 Star':
  //     return '⭐';
  //   case '2 Stars':
  //     return '⭐⭐';
  //   case '3 Stars':
  //     return '⭐⭐⭐';
  //   case '4 Stars':
  //     return '⭐⭐⭐⭐';
  //   case '5 Stars':
  //     return '⭐⭐⭐⭐⭐';
  //   default:
  //     return './icons/park.svg';
  //   }
  // };

  // handleChange(trail, key) {

  //  this.setState(prevState => {
  //    if (trail === this.props.favorites[0].name) {
  //     return {
  //       isClicked: !prevState.isClicked,
  //     }
  //     }
  //   })

  // console.log(trail.toString(''), this.props.favorites, key)
  // }



  render() {
    let optionTemplate = this.state.values.map((v, i) => (
      <option key={i} value={v.id}>{v.name}</option>
    ));
  return (
    <div>
      <ol className="list-group list-group-numbered">
        {
          this.props.favorites.map((fav, i) => (

            <li className="list-group-item d-flex justify-content-between align-items-start" key={i}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{fav.name}</div>
                {fav.location.lat}
                <br />
                {fav.location.lng}
                <br />
                <label>
                Rate Trail:
                <select value={this.state.value} onChange={this.handleChange}>
                  {optionTemplate}
                </select>
                </label>
                  <div className="form-group form-check">
                    <input type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    />
                    <label
                    className="form-check-label"
                    htmlFor="exampleCheck1">Visited!</label>
                  </div>
              </div>
              <span className="badge bg-primary rounded-pill">Rating: 0</span>
            </li>

          ))
        }
      </ol>
    </div>

  );
      };
};
export default Ratings;
