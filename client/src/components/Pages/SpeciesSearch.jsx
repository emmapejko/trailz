
import { React,  useState } from 'react';
import axios from 'axios';

const SpeciesSearch = () => {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('Species');

  const apiUrl = 'https://explorer.natureserve.org/api/data/taxonSearch?ouSeqUid=ELEMENT_GLOBAL.2.154701'

  useEffect(() => {
    axios.get(apiUrl)
    .then((data) => {
      console.log('animals data: ', data)
      setApiData(data.data)});
    });

  useEffect(() => {
    axios.post('/api/data/search')
    .then(res => res.sendStatus(200))
    .catch(err => res.sendStatus(404));
  })


  return (
    <div className="Species">
      <header className="d-flex justify-content-center align-items-center">
        <h2>Search For Species</h2>
      </header>
    </div>
  );
};

export default SpeciesSearch;