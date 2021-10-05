import React, { useState, useEffect } from 'react';

import BarChart from '../charts/BarChart.jsx';

const datas = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30],
];

let i = 0;

const ActivityLog = ({ user, events }) => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  // const changeData = () => {
  //   setData(datas[i++]);
  //   if (i === datas.length) i = 0;
  // };

  const getUserStatsByCategory = () => {
    const dataObj = {};

    events.forEach(event => {
      if (event.attendees.includes(`${user.firstName} ${user.lastName}`)) {
        dataObj[event.activity] = dataObj[event.activity] ? dataObj[event.activity] + 1 : 1;
      }
    });

    setData(Object.values(dataObj));
    setCategories(Object.keys(dataObj));
  };

  useEffect(() => {
    getUserStatsByCategory();
  }, []);

  return (
    <div>
      {/* <div>
        {
          events.map((event, i) => (event.attendees.includes(`${user.firstName} ${user.lastName}`)
            ? <div key={i}>{event.activity}</div>
            : null))
        }
      </div> */}
      <div>
        {/* <button type="button" onClick={changeData}>Change Data</button> */}
        <BarChart width={600} height={600} data={data} categories={categories} />
      </div>

    </div>
  );
};

export default ActivityLog;
