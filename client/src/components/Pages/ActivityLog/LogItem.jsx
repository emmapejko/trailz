import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  ActivityLogItem,
  ActivityLogItemName,
  ActivityLogItemDate,
  ActivityLogItemTime,
 } from '../../../styles/activityLogStyles';

const LogItem = ({ user, event, log }) => {
  const [distance, setDistance] = useState(log.distance);
  const [hours, setHours] = useState(log.hours);
  const [minutes, setMinutes] = useState(log.minutes);
  const [seconds, setSeconds] = useState(log.seconds);
  const [color, setColor] = useState('black');

  //console.log('EVENT: ', event._id, 'LOG: ', log.event);

  const submitDistAndTime = () => {
    axios.put(`/logs/addlog/${log._id}`, {
      data: {
        distance,
        hours,
        minutes,
        seconds
      }
    })
    .then(() => setColor('black'));
  }

  return (
    <ActivityLogItem>
      <ActivityLogItemName>{event.activity}</ActivityLogItemName>
      <ActivityLogItemDate>{event.time.slice(0, 10)}</ActivityLogItemDate>
      <ActivityLogItemTime>
        <input
          size="5"
          maxLength="5"
          style={{paddingRight:'45px', textAlign:'right', color: color}}
          value={distance}
          onChange={(e) => {
            setDistance(e.target.value);
            setColor('red');
          }}
        />
        <span style={{marginLeft:'-45px', color:'black'}}>miles</span>
      </ActivityLogItemTime>
      <ActivityLogItemTime>
        <input
          maxLength="2"
          size="2"
          style={{textAlign:'right', color: color}}
          value={hours}
          onChange={(e) => {
            setHours(e.target.value);
            setColor('red');
          }}
        />:
        <input
          maxLength="2"
          size="2"
          style={{textAlign:'right', color: color}}
          value={minutes}
          onChange={(e) => {
            setMinutes(e.target.value);
            setColor('red');
          }}
        />:
        <input
          maxLength="2"
          size="2"
          style={{textAlign:'right', color: color}}
          value={seconds}
          onChange={(e) => {
            setSeconds(e.target.value);
            setColor('red');
          }}
        />
      </ActivityLogItemTime>
      <ActivityLogItemTime><button onClick={submitDistAndTime}>Submit Dist & Time</button></ActivityLogItemTime>
    </ActivityLogItem>
  )
}

export default LogItem;