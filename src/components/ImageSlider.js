import React from 'react'
import { ImageWrapper, SliderContainer } from '../styles/HomepageStyles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const ImageSlider = () => {

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToscroll: 1,
    autoplay: true,
    arrows: false,
  }

  return (
    <SliderContainer {...sliderConfig}>
        <ImageWrapper to='/home'>
          <img src='/images/slider-badag.jpg' alt=''/>
        </ImageWrapper>
        <ImageWrapper to='/home'>
          <img src='/images/slider-badging.jpg' alt=''/>
        </ImageWrapper>
        <ImageWrapper to='/home'>
          <img src='/images/slider-scale.jpg' alt=''/>
        </ImageWrapper>
        <ImageWrapper to='/home'>
          <img src='/images/slider-scales.jpg' alt=''/>
        </ImageWrapper>
    </SliderContainer>
  )
}

export default ImageSlider