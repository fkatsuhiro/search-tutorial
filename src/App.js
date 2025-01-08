import './App.css';
import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from './SearchForm';
import Date from './Data';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [receivedQuery, setReceivedQuery] = useState('');

  function handleGetQuery (data) {
    setReceivedQuery(data);
  };

  return (
    <BrowserRouter>
      <SearchForm onDataSend={handleGetQuery} />
      <div className='d-flex' style={{width:'80%', margin: '0 auto', paddingTop: '100px'}}>
        <div style={{width: '45%', margin: '0 3% 0 2%'}}>
          <Date />
        </div>
        <div style={{width: '45%', margin: '0 3% 0 2%'}}>
          <Result saveQuery={receivedQuery}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
