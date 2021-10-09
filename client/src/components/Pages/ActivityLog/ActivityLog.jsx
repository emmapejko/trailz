/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Log from './Log.jsx';
import Stats from './Stats.jsx';
import { Breadcrumb } from '../../../styles/activityLogStyles.js';

const ActivityLog = ({ user, events }) => {
  const [barData, setBarData] = useState([]);
  const [calData, setCalData] = useState([]);
  const [view, setView] = useState('log');
  const [logs, setLogs] = useState([]);
  const [logBreadcrumb, setLogBreadcrumb] = useState('underline');
  const [dashBreadcrumb, setDashBreadcrumb] = useState('none');

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

  //create log in db for each event that the user is attendee of
  //save logs to state and send logs to log component
  const createLogsForUser = () => {
    setLogs([]);
    events.forEach(event => {
      if (event.attendees.includes(`${user.firstName} ${user.lastName}`)) {
        if (event.activity === 'Running' || event.activity === 'Hiking' || event.activity === 'Biking')
        axios.post(`/logs/${user._id}/${event._id}`)
          .then(({ data }) => {
            setLogs(prevLogs => [...prevLogs, data]);
          })
      }
    })
  }

  const getView = () => {
    if (view === 'log') {
      return (
        <Log user={user} events={events} logs={logs}/>
      )
    } else if (view === 'stats') {
      return (
        <Stats barData={barData} calData={calData} />
      )
    }
  }

  useEffect(() => {
    createLogsForUser();
    getUserStatsByCategory();
    getUserStatsByDate();
  }, []);

  return (
    <div>
      <nav style={{"--bs-breadcrumb-divider":''}} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <Breadcrumb
            className="breadcrumb-item active"
            style={{textDecoration: logBreadcrumb}}
            onClick={() => {
              createLogsForUser();
              setView('log');
              setDashBreadcrumb('none');
              setLogBreadcrumb('underline');
            }}
          >
            Activity Log
          </Breadcrumb>
          <Breadcrumb
            className="breadcrumb-item active"
            style={{textDecoration: dashBreadcrumb}}
            onClick={() => {
              setView('stats');
              setLogBreadcrumb('none');
              setDashBreadcrumb('underline');
            }}
          >
            Dashboard
          </Breadcrumb>
        </ol>
      </nav>
      {getView()}
    </div>
  );
};

export default ActivityLog;