import styled from "styled-components";
import Slider from 'react-slick'
import { Link } from "react-router-dom";

export const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  top: 70px;
  padding: 0 calc(3vw + 5px);
  &::after{
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
  @media (max-width: 1106px) {
    top: 140px;
    min-height: calc(100vh - 140px);
  }
`

export const SliderContainer = styled(Slider)`
  margin-top: 20px;
  width: 100%;
  & > button{
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    transition: opacity .2s ease-out;
  }
  &:hover{
    & > button{
      opacity: 1;
    }
  }

  ul li button {
    &::before{
      font-size: 15px;
      color: #c3c3c7;
    }
  }

  li.slick-active button:before{
    color: white;
  }

  .slick-list{
    overflow: initial;
  }

`

export const ImageWrapper = styled(Link)`
  display: flex;
  border-radius: 6px;
  position: relative;
  img{
    width: 100%;
  }
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  padding: 4px;
  &:hover {
    padding: 0;
    border: 4px solid #f9f9f9;
  }
`