import React from 'react';
import { Card, Image } from 'antd';
import Beer from '../types/Beer';

interface BeerCardProps {
  data: Beer;
}

interface BeerCardTitleProps {
  title: string;
  subTitle: string;
}
const BeerCardTitle: React.FC<BeerCardTitleProps> = ({ title, subTitle }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{title}</span>
      <span style={{ fontSize: '.6rem', color: '#FFA500' }}>{subTitle}</span>
    </div>
  );
};
const BeerCard: React.FC<BeerCardProps> = ({ data }) => {
  return (
    <Card
      style={{
        flex: '50%' /* or - flex: 0 50% - or - flex-basis: 50% - */,
        width: '50rem',
        marginTop: 16,
        textAlign: 'initial',
      }}
    >
      <Card.Meta
        title={<BeerCardTitle title={data.name} subTitle={data.tagline} />}
        description={data.description.substring(0, 250) + '...'}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          style={{
            marginRight: '1rem',
            width: '3rem',
            height: '5rem',
            objectFit: 'contain',
          }}
          src={data.image_url}
        />
      </div>
    </Card>
  );
};

export default BeerCard;
