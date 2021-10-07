/* eslint-disable */

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const PieChart = ({ eventData }) => (
  <Chart
    width={'600px'}
    height={'400px'}
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
      title: 'Events Attended by Activity Type',
    }}
  />
);

export default PieChart;
