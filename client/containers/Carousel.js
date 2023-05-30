import React, { Component } from "react";
import Slider from "react-slick";
import AppCard from "../components/AppCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel(props){
  
    const settings = {
      dots: true,
      centerMode: true,
      className: "carousel",
      infinite: true,
      centerPadding: "30px",
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const truncateLink = (url) => {
      const maxLength = 40; // Maximum length of the displayed link
      if (url.length > maxLength) {
        return url.substring(0, maxLength) + "...";
      }
      return url;
    };
    const cardsJSX = props.data.map((card, index) => (
      <div className="cardInCarousel">
        <AppCard
          key={index}
          title={card.name}
          image={card.image_url}
          description={card.categories
            .map((category) => category.title)
            .join(", ")}
          address={card.location.join(", ")}
          score={Math.round(card.averageScore * 100)}
          url={card.url}
          
        />
      </div>
      // <div key={index} className="card">
      //   <h1>{card.name}</h1>
      //   <img src={card.image_url} />
      //   <p>Score: {Math.round(card.averageScore * 100)}/100</p>
      //   <p>
      //     Category: {card.categories.map((category) => category.title).join(", ")}
      //   </p>
      //   <p>Address: {card.location.join(", ")}</p>
      //   <p>{truncateLink(card.url)}</p>
      // </div>
    ));
    
    return (
      <div className="cardContainer">
        <h2> Results </h2>
        <Slider {...settings}>
          {cardsJSX}
        </Slider>
      </div>
    );
  }