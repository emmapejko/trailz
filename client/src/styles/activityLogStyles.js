import styled from 'styled-components';

const ActivityLogItem = styled.div`
  display: flex;
  padding: 15px;
  background: ForestGreen;
  margin-top: 10px;
  justify-content: space-between;
  color: #fff;
  border-top-right-radius: 5px;
  box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.55);
`;

const ActivityLogItemName = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 25%;
`;

const ActivityLogItemDate = styled.span`
  display: flex;
  justify-content: center;
  width: 25%;
`;

const ActivityLogItemTime = styled.span`
  display: flex;
  justify-content: center;
  width: 25%;
`

export {
  ActivityLogItem,
  ActivityLogItemName,
  ActivityLogItemDate,
  ActivityLogItemTime,
}