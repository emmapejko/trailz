import React, { useState, useEffect } from 'react';

import LogItem from './LogItem.jsx';
import {
  ActivityLogItem,
  ActivityLogItemName,
  ActivityLogItemDate,
  ActivityLogItemTime,
 } from '../../../styles/activityLogStyles';

const Log = ({ user, events }) => {

  const logEvents = events.filter(event => event.activity === 'Running' || event.activity === 'Hiking' || event.activity === 'Biking');

  return (
    <div>
      <ActivityLogItem>
      <ActivityLogItemName>Activity Type</ActivityLogItemName>
      <ActivityLogItemTime>Distance (miles)</ActivityLogItemTime>
      <ActivityLogItemTime>Time (HH:MM:SS)</ActivityLogItemTime>
      <ActivityLogItemDate>Date</ActivityLogItemDate>
    </ActivityLogItem>
      <div>
        {
          logEvents.map((event, i) => <LogItem key={i} event={event} user={user}/>)
        }
      </div>
    </div>
  )
}

export default Log;