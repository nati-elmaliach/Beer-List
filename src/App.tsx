import React from 'react';
import { PageHeader } from 'antd';
import './App.css';
import BeerList from './components/BeerList';

function App() {
  return (
    <div className='App'>
      <PageHeader
        style={{ justifyContent: 'center', flexWrap: 'wrap' }}
        title='Beers'
        subTitle='Beer is the best!'
      />
      <BeerList />
    </div>
  );
}

export default App;
