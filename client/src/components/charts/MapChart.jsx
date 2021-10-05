/* eslint-disable */

import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

import { GOOGLE_MAPS_API_KEY } from '../../../../server/google-maps/API.js';

const MapChart = ({ eventData }) => (
  <Chart
    width={'500px'}
    height={'300px'}
    chartType="GeoChart"
    data={[
      ['City', 'Population', 'Area'],
      ['Rome', 2761477, 1285.31],
      ['Milan', 1324110, 181.76],
      ['Naples', 959574, 117.27],
    ]}
    options={{
      region: 'IT',
      displayMode: 'markers',
      colorAxis: { colors: ['green', 'blue'] },
    }}
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    mapsApiKey={GOOGLE_MAPS_API_KEY}
    rootProps={{ 'data-testid': '2' }}
  />
);

export default MapChart;
