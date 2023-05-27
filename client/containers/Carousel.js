import React, { Component } from "react";
import Slider from "react-slick";
import AppCard from "../components/AppCard"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Carousel extends Component {
  render() {
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
    return (
      <div className="carousel">
        <h2> Results </h2>
        <Slider {...settings}>
          <div className="cardInCarousel">
          <AppCard/>
            <h3>Tacos SF</h3>
          </div>
          <div>
          <AppCard/>
            <h3>Burger Palace</h3>
          </div>
          <div>
          <AppCard/>
            <h3>Pizza Legends</h3>
          </div>
          <div>
          <AppCard/>
            <h3>Sushi House</h3>
          </div>
          <div>
          <AppCard/>
            <h3>Italian Heaven</h3>
          </div>
          <div>
          <AppCard/>
            <h3>A great pub</h3>
          </div>
          <div>
          <AppCard/>
            <h3>Ice cream parlor</h3>
          </div>
          <div>
          <AppCard/>
            <h3>2nd best bar</h3>
          </div>
          <div>
          <AppCard/>
            <h3>A very ok bar</h3>
          </div>
        </Slider>
      </div>
    );
  }
}