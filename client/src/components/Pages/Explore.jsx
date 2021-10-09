import React, { useState } from 'react';
import axios from 'axios';

import { ExploreHeader } from '../../styles/activityLogStyles';

const parks = {
  'Arches National Park': 'ARCH',
  'Bryce Canyon National Park': 'BRCA',
  'Canyonlands National Park': 'CANY',
  'Death Valley National Park': 'DEVA',
  'Grand Canyon National Park': 'GRCA',
  'Great Sand Dunes National Park': 'GRSA',
  'Joshua Tree National Park': 'JOTR',
  'Natural Bridges National Monument': 'NABR',
  'Petrified Forest National Park': 'PEFO',
  'Yosemite National Park': 'YOSE',
};

const Explore = () => {
  const [selected, setSelected] = useState('');
  const [activities, setActivities] = useState([]);

  const searchPark = () => {
    axios.get( `/explore/${parks[selected]}`)
      .then(({ data }) => {
        console.log(data);
        setActivities(data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div>
        <ExploreHeader>Explore Trails & More in National Parks</ExploreHeader>
      </div>
      <div className="input-group mb-3">
        <div style={{margin: 'auto', display: 'block'}}>
          <select className="custom-select" id="inputGroupSelect01" value={selected} onChange={(e) => setSelected(e.target.value)}>
            <option defaultValue>Choose...</option>
            {
              Object.keys(parks).map((name, i) => <option key={i}>{name}</option>)
            }
          </select>
          <button onClick={searchPark}>
            Search
          </button>
        </div>
    </div>
    <div>
      {
        !activities.length ? null :
        <div id="mainContent" className="container" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}>
          {
          activities.map((activity, i) => <div key={i} className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src={activity.images[0].url} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{activity.title}</h5>
                <p className="card-text">{activity.shortDescription}</p>
                <a href={activity.url} className="btn btn-primary" target="_blank">More Info</a>
              </div>
            </div>)
          }
        </div>
      }
    </div>
  </div>
  )
}

export default Explore;