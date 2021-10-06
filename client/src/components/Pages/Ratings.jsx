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
import RatingsItem from '../Pages/RatingsItem.jsx'
// import axios from 'axios';

class Ratings extends React.Component {
  // console.log(favorites, 'favs');
  // console.log(user, 'user');
  // const [rating] = useState(0);
  //{ user, favorites }
  constructor(props) {
    super(props)


    this.state = {
      selectValue: 'Rate!',
      // values: [
      //   { name: 'select', id: 0 },
      //   { name: '1 Star', id: 1 },
      //   { name: '2 Stars', id: 2 },
      //   { name: '3 Stars', id: 3 },
      //   { name: '4 Stars', id: 4 },
      //   { name: '5 Stars', id: 5 }
      // ]
    }
    //bind area
    //this.handleClick = this.handleClick.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }



  // getRating(star) {
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

  // handleClick(e, trail) {
  //   const { favorites } = this.props;
  //   console.log(trail, favorites[0].name, 'weehaw')
  //     this.setState({ selectValue: e.target.value })
  // }

  render() {
    // let optionTemplate = this.state.values.map((v, i) => (
    //   <option key={i} value={v.id}>{v.name}</option>
    // ));
    const { favorites } = this.props;
  return (
    <div>
      <ol className="list-group list-group-numbered">
        {
          this.props.favorites.map((fav) => (

            <RatingsItem
            key={fav._id}
            fav={fav}
           // handleChange={(e) => this.handleChange(e)}
            />
          ))
        }
      </ol>
    </div>

  );
      };
};
export default Ratings;
