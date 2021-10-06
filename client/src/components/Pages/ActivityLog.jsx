/* eslint-disable */
import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

import BarChart from '../charts/BarChart.jsx';
import CalendarChart from '../charts/CalendarChart.jsx';
import PieChart from '../charts/PieChart.jsx';

const ActivityLog = ({ user, events }) => {
  const [barData, setBarData] = useState([]);
  const [calData, setCalData] = useState([]);
  //const [pieData, setPieData] = useState([]);

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

    console.log('EVENTS BY ACTIVITY TYPE: ', data);
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

    console.log('EVENTS BY DATE: ', data);
    setCalData(data);
  }

  useEffect(() => {
    getUserStatsByCategory();
    getUserStatsByDate();
  }, []);

  return (
    <div>
      <div>
        <BarChart eventData={barData} />
      </div>
      <div>
        <CalendarChart eventData={calData} />
      </div>
      <div>
        <PieChart eventData={barData} />
      </div>
    </div>
  );
};

export default ActivityLog;
