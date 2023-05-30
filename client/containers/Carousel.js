import React, { Component } from "react";
import Slider from "react-slick";
import AppCard from "../components/AppCard";
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
      <div className="cardContainer">
        <h2> Results </h2>
        <Slider {...settings}>
          <div >
          <AppCard
          key="1"
          title="Yum review"
          subheader="January 10, 2023"
          image="../image/food.jpg"
          description="This is another great place..."
          />
            <h3>Props SF</h3>
          </div>
          <div className="cardInCarousel">
          <AppCard
          key="2"
          title="Noodles review"
          subheader="March 15, 2023"
          image="../image/noodles.jpg"
          description="different description"
          />
            <h3>Burger Palace</h3>
          </div>
          <div className="cardInCarousel">
          <AppCard
          key="3"
          title="Steak review"
          subheader="May 30, 2023"
          image="../image/steak.jpg"
          description="Great steakhouse"
          />
            <h3>Pizza Legends</h3>
          </div>
          <div className="cardInCarousel">
          <AppCard
            key="4"
            title="Bar review"
            subheader="March 10, 2023"
            image="../image/restaurant.jpg"
            description="Great location friendly people"
          />
            <h3>Sushi House</h3>
          </div>
          <div className="cardInCarousel">
          <AppCard
            key="5"
            subheader="May 10, 2023"
            title="Italian review"
            image="../image/altovino.jpg"
            description="Great italian yum"
          />
            <h3>Italian Heaven</h3>
          </div>
          <div className="cardInCarousel">
          <AppCard
            key="6"
            title="Irish pub"
            subheader="May 17, 2023"
            image="../image/fishchips.jpg"
            description="Great italian yum"
          />
            <h3>A great pub</h3>
          </div>
          <div className="cardInCarousel">
          <AppCard
            key="7"
            title="Gilman Brewery"
            subheader="May 28, 2023"
            image="../image/pizza.jpg"
            description="Great pizza and beer"
          />
            <h3>Brewery</h3>
          </div>
          <div className="cardInCarousel">
          <AppCard
            key="8"
            title="Ice cream"
            subheader="May 18, 2023"
            image="../image/icecream.jpg"
            description="ice cream cones are cheap"
          />
            <h3>2nd best bar</h3>
          </div>
          <div className="cardInCarousel">
          <AppCard
            key="9"
            title="Ice cream"
            subheader="May 10, 2023"
            image="../image/fogharber.jpg"
            description="ice cream cones are cheap"
          />
            <h3>A very ok bar</h3>
          </div>
        </Slider>
      </div>
    );
  }
}