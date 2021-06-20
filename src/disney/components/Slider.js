import React from 'react';

import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageSlider from 'react-slick'


const Slider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/disney/images/slider-badging.jpg" alt="Slider Item"/>
            </Wrap>
            <Wrap>
                <img src="/disney/images/slider-badag.jpg" alt="Slider Item"/>
            </Wrap>
            <Wrap>
                <img src="/disney/images/slider-scale.jpg" alt="Slider Item"/>
            </Wrap>
            <Wrap>
                <img src="/disney/images/slider-scales.jpg" alt="Slider Item"/>
            </Wrap>
        </Carousel>
    )
}

export default Slider


const Carousel = styled(ImageSlider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: 300ms;

        &:hover {
            border-color: rgb(249, 249, 249, 0.8);
        }
    }
`