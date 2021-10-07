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

  console.log('EVENT: ', event._id, 'LOG: ', log.event);

  return (
    <ActivityLogItem>
      <ActivityLogItemName>{event.activity}</ActivityLogItemName>
      <ActivityLogItemTime>
        <input
          size="15"
          style={{paddingRight:'45px', textAlign:'right'}}
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <span style={{marginLeft:'-45px', color:'black'}}>miles</span>
      </ActivityLogItemTime>
      <ActivityLogItemTime>
        <input
          maxLength="2"
          size="2"
          style={{textAlign:'right'}}
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />:
        <input
          maxLength="2"
          size="2"
          style={{textAlign:'right'}}
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />:
        <input
          maxLength="2"
          size="2"
          style={{textAlign:'right'}}
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </ActivityLogItemTime>
      <ActivityLogItemDate>{event.time.slice(0, 10)}</ActivityLogItemDate>
    </ActivityLogItem>
  )
}

export default LogItem;