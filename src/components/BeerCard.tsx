import React from 'react';
import { Card, Tooltip } from 'antd';
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

  const getIngredients = () => {
    const keys = Object.keys(data.ingredients)
    const {yeast} = data.ingredients
    const title = keys.join("\n")
    return title + " - "  + yeast
  }
  return (
    <Card className='card-style'>
      <Card.Meta
        title={<BeerCardTitle title={data.name} subTitle={data.tagline} />}
        description={data.description.substring(0, 250) + '...'}
      />

      <div className='image-container-style'>
      <Tooltip title={getIngredients()}>
        <img  className='image-style' src={data.image_url} />
        </Tooltip>
      </div>
    </Card>
  );
};

export default BeerCard;
