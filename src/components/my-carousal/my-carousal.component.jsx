import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import game from './game.jpg'
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = ({shouldApplyparticles}) => {
  return (
    <div id="home" style={{marginTop:"-60px"}}>
      {shouldApplyparticles? 
      <img className="d-block w-100 custom-img" src={game} alt="Third slide" />
      :
      (
        <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={game} alt="First slide" />
        </Carousel.Item>
      </Carousel>
        )
      }
      
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;
