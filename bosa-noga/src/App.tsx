import React, { ReactElement } from 'react';
import './App.css';
import Error from './components/Error/Error';
import { Skeleton } from './components/Skeleton';
import Loading from './components/Loading/Loading';

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <Error />
        <Loading />
        <div style={{ height: '50px', width: '200px' }}>
          <Skeleton />
        </div>
      </header>
    </div>
  );
}

export default App;
