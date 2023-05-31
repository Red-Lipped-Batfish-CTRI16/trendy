import React, { useState } from "react";
import Slider from "react-slick";
import FavAppCard from "../components/FavAppCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function FavoritesCarousel(props){

    const settings = {
      dots: true,
      centerMode: true,
      className: "carousel",
      infinite: true,
      centerPadding: "30px",
      speed: 1500,
      rows: 2,
      slidesPerRow: 2
    };
 
    const cardsJSX = props.data.map((card, index) => {
     console.log(index);
     return <div className="cardInCarousel">
        <FavAppCard
          key={index}
          favorite={true}
          title={card.name}
          image={card.image_url}
          description={card.categories
            .map((category) => category.title)
            .join(", ")}
          address={card.location.join(", ")}
          score={card.averageScore ? Math.round(card.averageScore * 100) : null}
          url={card.url}
          
        />
      </div>}
   
    );
    
    return (
      <div className="cardContainer">
       
        <Slider {...settings}>
          {cardsJSX}
        </Slider>
      </div>
    );
  }