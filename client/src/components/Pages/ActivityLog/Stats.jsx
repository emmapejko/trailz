import React, { useState, useEffect } from 'react';

import BarChart from '../../charts/BarChart.jsx';
import CalendarChart from '../../charts/CalendarChart.jsx';
import PieChart from '../../charts/PieChart.jsx';

const Stats = ({ barData, calData }) => {
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
  )
}

export default Stats;