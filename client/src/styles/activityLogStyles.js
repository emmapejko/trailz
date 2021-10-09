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
  width: 20%;
`;

const ActivityLogItemDate = styled.span`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const ActivityLogItemTime = styled.span`
  display: flex;
  justify-content: center;
  width: 20%;
`

const Breadcrumb = styled.li`
  font-size: 25px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ExploreHeader = styled.div`
  font-size: 25px;
  color: #6c757d;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
`;

export {
  ActivityLogItem,
  ActivityLogItemName,
  ActivityLogItemDate,
  ActivityLogItemTime,
  Breadcrumb,
  ExploreHeader
}