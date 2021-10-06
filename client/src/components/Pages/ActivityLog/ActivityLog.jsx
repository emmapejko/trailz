/* eslint-disable */
import React, { useState, useEffect } from 'react';

import Log from './Log.jsx';
import Stats from './Stats.jsx';

const ActivityLog = ({ user, events }) => {
  const [barData, setBarData] = useState([]);
  const [calData, setCalData] = useState([]);
  const [view, setView] = useState('log');

  const getUserStatsByCategory = () => {
    const data = []; //[[activityName, #]]
    const eventObj = {};

    events.forEach(event => {
      if (event.attendees.includes(`${user.firstName} ${user.lastName}`)) {
        eventObj[event.activity] = eventObj[event.activity] ? eventObj[event.activity] + 1 : 1;
      }
    });

    Object.keys(eventObj).forEach(activity => {
      data.push([ activity, eventObj[activity] ]);
    });

    //console.log('EVENTS BY ACTIVITY TYPE: ', data);
    setBarData(data);
  };

  const getUserStatsByDate = () => {
    const data = []; //[[date, number of events], [date2, num2], ... ]
    const eventObj = {};

    events.forEach(event => {
      if (event.attendees.includes(`${user.firstName} ${user.lastName}`)) {
        eventObj[event.time] = eventObj[event.time] ? eventObj[event.time] + 1 : 1;
      }
    });

    Object.keys(eventObj).forEach(date => {
      const year = date.slice(0, 4);
      const month = date.slice(5, 7);
      const day = date.slice(8, 10);
      data.push([ new Date(year, month, day), eventObj[date] ]);
    });

    //console.log('EVENTS BY DATE: ', data);
    setCalData(data);
  };

  const getView = () => {
    if (view === 'log') {
      return (
        <Log user={user} events={events} />
      )
    } else if (view === 'stats') {
      return (
        <Stats barData={barData} calData={calData} />
      )
    }
  }

  useEffect(() => {
    getUserStatsByCategory();
    getUserStatsByDate();
  }, []);

  return (
    <div>
      <h3 align='center'>Activity Log</h3>
      <nav>
      <button onClick={() => view === 'log' ? setView('stats') : setView('log')}>{view === 'log' ? 'View Stats' : 'View Log'}</button>
      </nav>
      {getView()}
    </div>
  );
};

export default ActivityLog;