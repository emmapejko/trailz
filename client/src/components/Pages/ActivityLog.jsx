/* eslint-disable */
import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

import BarChart from '../charts/BarChart.jsx';

const ActivityLog = ({ user, events }) => {
  const [data, setData] = useState([]);

  const getUserStatsByCategory = () => {
    const activityData = [];
    const eventObj = {};

    events.forEach(event => {
      if (event.attendees.includes(`${user.firstName} ${user.lastName}`)) {
        eventObj[event.activity] = eventObj[event.activity] ? eventObj[event.activity] + 1 : 1;
      }
    });

    Object.keys(eventObj).forEach(activity => {
      //activityData.push({ activity: activity, amount: eventObj[activity]});
      activityData.push([ activity, eventObj[activity] ]);
    });

    console.log(activityData);
    setData(activityData);
  };

  useEffect(() => {
    getUserStatsByCategory();
  }, []);

  return (
    <div>
      <div>
        <BarChart width={600} height={600} eventData={data} yAxisAttribute={'amount'} xAxisAttribute={'activity'}/>
      </div>
    </div>
  );
};

export default ActivityLog;
