import FavoritesCarousel from "../containers/FavoritesCarousel";
import React from 'react';
import favorites from '../containers/testData'

export default function Favorites() {
  console.log(favorites);
  return (
    <div className="Favorites">
      <h1>Favorites</h1>
    <div>
      <FavoritesCarousel 
        data={favorites}
      >
      </FavoritesCarousel>
    </div>
    </div>
    
);
}