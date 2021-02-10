import React from 'react';
import RestaurantsCard from './RestaurantCard';

const cardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    maxWidth: "900px",
    margin: 'auto'
  }

const CardsListing = ({
  rests,
  //handleEditClick,
  //handleDeleteClick,
}) => {
  return (
    <div className={cardStyle}>
      {rests.map((rest,i) => (
        <RestaurantsCard
          key={i}
          data={rest}
          ////handleEditClick={handleEditClick}
          ////handleDeleteClick={handleDeleteClick}
        />
      ))}
    </div>
  );
};

export default CardsListing;