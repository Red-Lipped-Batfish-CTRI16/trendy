import React, { useState } from "react";
import Slider from "react-slick";
import AppCard from "../components/AppCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SavedCarousel(props) {
  const settings = {
    dots: true,
    centerMode: true,
    className: "carousel",
    infinite: true,
    centerPadding: "30px",
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  //   return (
  //     <div>hi</div>
  //     )
  console.log("propsdata", props.data);

  const cardsJSX = props.data.map((business, index) => {
    console.log(index);
    return (
      <div className="cardInCarousel">
        <AppCard
          key={index}
          favorite={false}
          title={business.businessname}
          image={business.image}
          description={business.description}
          address={business.address}
          score={business.score}
          url={business.url}
          username={business.username}
        />
      </div>
    );
  });

  return (
    <div className="cardContainer">
      <Slider {...settings}>{cardsJSX}</Slider>
    </div>
  );
}
