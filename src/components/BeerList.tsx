import React, { useState } from 'react';
import { Button, Radio, Spin } from 'antd';
import { useBeers } from '../hooks/useBeers';
import BeerCard from './BeerCard';

const BeerList = () => {
  const [beers, loadMore] = useBeers();
  const [rowsNumber, setRowsNumber] = useState(1);

  console.log(beers);

  const rowClassName = rowsNumber === 2 ? '' : 'beer-list-columns';
  const getContent = () => {
    if (beers.length) {
      return (
        <div className={'beer-list ' + rowClassName}>
          {beers.map((beer) => (
            <BeerCard key={beer.id} data={beer} />
          ))}
        </div>
      );
    }
    return (
      <div>
        <Spin size='large' />
      </div>
    );
  };
  return (
    <div>
      <Radio.Group
        value={rowsNumber}
        onChange={(e) => setRowsNumber(e.target.value)}
      >
        <Radio.Button value={1}>One Column</Radio.Button>
        <Radio.Button value={2}>Two Columns</Radio.Button>
      </Radio.Group>
      {getContent()}
      {beers.length ? (
        <Button className='load-more-btn' type='primary' onClick={loadMore}>
          Load more
        </Button>
      ) : null}
    </div>
  );
};

export default BeerList;
