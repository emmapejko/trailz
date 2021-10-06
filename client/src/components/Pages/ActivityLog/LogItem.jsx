import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  ActivityLogItem,
  ActivityLogItemName,
  ActivityLogItemDate,
  ActivityLogItemTime,
 } from '../../../styles/activityLogStyles';

const LogItem = ({ user, event }) => {


  /**
   * add a log to db:
   * owner: user._id
   * distance: state distance
   * hours, minutes, seconds: from state
   */

  return (
    <ActivityLogItem>
      <ActivityLogItemName>{event.activity}</ActivityLogItemName>
      <ActivityLogItemTime><input size="15" style={{paddingRight:'45px', textAlign:'right'}} /><span style={{marginLeft:'-45px', color:'black'}}>miles</span></ActivityLogItemTime>
      <ActivityLogItemTime>
        <input maxLength="2" size="2" placeholder='00' style={{textAlign:'right'}}/>:
        <input maxLength="2" size="2" placeholder='00' style={{textAlign:'right'}}/>:
        <input maxLength="2" size="2" placeholder='00' style={{textAlign:'right'}}/>
      </ActivityLogItemTime>
      <ActivityLogItemDate>{event.time.slice(0, 10)}</ActivityLogItemDate>
    </ActivityLogItem>
  )
}

export default LogItem;