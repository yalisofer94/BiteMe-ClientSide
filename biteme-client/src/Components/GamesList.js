import React from 'react';
import RestaurantsCard from './RestaurantCard';
import PersistentDrawerLeft from './Navbar';

const cardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    maxWidth: "900px",
    margin: 'auto'
  }


const CardsListing = ({
  game,
  // onSelect,
  onDelete,
}) => {
  return (
    <PersistentDrawerLeft admin={localStorage.isAdmin} username={localStorage.userName}/>
    <div className="home-content">
    <div className={cardStyle}>
      {rests.map((rest, i) => (
        <RestaurantsCard
          key={rest.place}
          data={rest}
          // onSelect={onSelect}
          onDelete={onDelete}
        />
      ))
      }
    </div>
    </div>
  );
};

export default CardsListing;