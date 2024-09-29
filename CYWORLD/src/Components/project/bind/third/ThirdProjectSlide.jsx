import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectImage from "../../ProjectImage";
import { SliderBorder } from "../styles/BindStyle";

const ThirdProjectSlide = () => {

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
                    <ProjectImage imgSrc="/background/j_page.1.png" />
                    <ProjectImage imgSrc="/background/j_page.2.png" />
                    <ProjectImage imgSrc="/background/j_page.3.png" />
                    <ProjectImage imgSrc="/background/j_page.4.png" />
                    <ProjectImage imgSrc="/background/j_page.5.png" />
                </Slider>
            </SliderBorder>
        </>
    )
}

export default ThirdProjectSlide;