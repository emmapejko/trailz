/* eslint-disable */

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const PieChart = ({ eventData }) => (
  <Chart
    width={'500px'}
    height={'300px'}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
      [
        'Activity',
        'Number of Events',
      ],
      ...eventData
    ]}
    options={{
      title: 'Events by Activity Type',
    }}
  />
);

export default PieChart;
