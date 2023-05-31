import Carousel from "../containers/Carousel";
import React from 'react';
import saved from '../containers/testData'

export default function Saved() {
  
  return (
    <div className="Saved">
        <h1>Saved</h1>
    <div>
      <Carousel 
        data={saved}
      >
      </Carousel>
    </div>
    </div>
);
}