import React, { useState, useEffect } from 'react';

import {
  ActivityLogItem,
  ActivityLogItemName,
  ActivityLogItemDate,
  ActivityLogItemTime,
 } from '../../../styles/activityLogStyles';

const LogItem = ({ user, event }) => {
  return (
    <ActivityLogItem>
      <ActivityLogItemName>{event.activity}</ActivityLogItemName>
      <ActivityLogItemTime><input size="15" style={{paddingRight:'45px', textAlign:'right'}} /><span style={{marginLeft:'-45px', color:'black'}}>miles</span></ActivityLogItemTime>
      <ActivityLogItemTime>
        <input maxlength="2" size="2" placeholder='00' style={{textAlign:'right'}}/>:
        <input maxlength="2" size="2" placeholder='00' style={{textAlign:'right'}}/>:
        <input maxlength="2" size="2" placeholder='00' style={{textAlign:'right'}}/>
      </ActivityLogItemTime>
      <ActivityLogItemDate>{event.time.slice(0, 10)}</ActivityLogItemDate>
    </ActivityLogItem>
  )
}

export default LogItem;