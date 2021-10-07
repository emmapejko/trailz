/* eslint-disable */

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const CalendarChart = ({ eventData }) => (
  <Chart
  width={1000}
  height={350}
  chartType="Calendar"
  loader={<div>Loading Chart</div>}
  data={[
    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Events' }],
    ...eventData
  ]}
  options={{
    title: 'Events Attended by Date',
  }}
  style={{marginLeft: '8%', marginRight: '8%'}}
/>
);

export default CalendarChart;

