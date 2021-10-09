import React, { useState, useEffect } from 'react';

import LogItem from './LogItem.jsx';
import {
  ActivityLogItem,
  ActivityLogItemName,
  ActivityLogItemDate,
  ActivityLogItemTime,
 } from '../../../styles/activityLogStyles';

const Log = ({ user, events, logs }) => {

  const logEvents = events.filter(event => event.attendees.includes(`${user.firstName} ${user.lastName}`) && (event.activity === 'Running' || event.activity === 'Hiking' || event.activity === 'Biking'));

  const organizeLogs = () => {
    const organizedLogs = [];
    logEvents.forEach((event, i) => {
      logs.forEach(log => {
        if (log.event === event._id) {
          organizedLogs[i] = log
        }
      })
    })
    return organizedLogs;
  };

  //const logsInOrder = organizeLogs();
  //console.log('EVENTS: ', logEvents);
  //console.log('LOGS IN ORDER: ',logsInOrder);

  return (
    <div>
      <ActivityLogItem>
      <ActivityLogItemName>Activity Type</ActivityLogItemName>
      <ActivityLogItemTime>Distance (miles)</ActivityLogItemTime>
      <ActivityLogItemTime>Time (HH:MM:SS)</ActivityLogItemTime>
      <ActivityLogItemTime>Submit</ActivityLogItemTime>
      <ActivityLogItemDate>Date</ActivityLogItemDate>
    </ActivityLogItem>
      <div>
        {
          logEvents.length === logs.length ?
          logEvents.map((event, i) => <LogItem key={i} event={event} user={user} log={organizeLogs()[i]}/>)
          : null
        }
      </div>
    </div>
  )
}

export default Log;