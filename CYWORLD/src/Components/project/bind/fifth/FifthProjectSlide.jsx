import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectImage from "../../ProjectImage";
import { SliderBorder } from "../styles/BindStyle";

const FifthProjectSlide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <SliderBorder>
        <Slider {...settings}>
          {/* <ProjectImage imgSrc="/background/l_page1.png" /> */}
          <ProjectImage imgSrc="/background/l_page2.png" />
          <ProjectImage imgSrc="/background/l_page3.png" />
          <ProjectImage imgSrc="/background/l_page4.png" />
        </Slider>
      </SliderBorder>
    </>
  );
};

export default FifthProjectSlide;
