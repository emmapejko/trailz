import React, { useState } from 'react';
import axios from 'axios';

import { ExploreHeader } from '../../styles/activityLogStyles';
import EventForm from '../Forms/EventForm.jsx';

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

const Explore = ({ user, addEvent }) => {
  const [selected, setSelected] = useState('');
  const [activities, setActivities] = useState([]);
  const [plan, setPlan] = useState({});
  const [location, setLocation] = useState({});

  const searchPark = () => {
    axios.get( `/explore/${parks[selected]}`)
      .then(({ data }) => {
        console.log(data);
        setActivities(data);
      })
      .catch(err => console.error(err));
  };

  const addParkEvent = (activity) => {
    console.log(activity);
    setLocation({
      name: selected,
      location: {
        lat: activity.latitude ? parseFloat(activity.latitude) : 39.5501,
        lng: activity.longitude ? parseFloat(activity.longitude) : -105.7821,
      }
    })
    setPlan(activity);
  }

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
        plan.title ?
        <div style={{marginLeft: '8%'}}>
          <EventForm
            location={location}
            addEvent={addEvent}
            closeModal={() => setPlan({})}
            titleFromNPS={plan.title}
          />
        </div>
        :
        !activities.length ? <div style={{
          backgroundImage: 'url("https://wallpaperaccess.com/full/825191.jpg")',
          height: '1000px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          backgroundPosition: '80% center',
        }}/> :
        <div id="mainContent" className="container" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}>
          {
          activities.map((activity, i) => <div key={i} className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src={activity.images[0].url} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{activity.title}</h5>
                <p className="card-text">{activity.shortDescription}</p>
                <button style={{marginRight: '5px'}} onClick={() => window.open(activity.url)}>More Info</button>
                <button onClick={() => addParkEvent(activity)}>Plan Event</button>
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