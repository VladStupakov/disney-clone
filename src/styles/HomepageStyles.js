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
  border-radius: 6px;
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

export const PreviewsContainer = styled.div`
  margin-top: 30px;
  padding: 30px 0px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PreviewsWrapper = styled.div`
  padding-top: 50%;
  border-radius: 10px;
  border: 3px solid #585858;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0px;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    scale: 1.05;
    border-color: #f9f9f9;
    video {
      opacity: 1;
    }
  }
`;


export const MoviesShortListContainer = styled.div`
  padding: 0 0 26px;
`;

export const MoviesShortListContent = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const MovieWrapper = styled.div`
  padding-top: 50%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export const MovieSectionTitle = styled.h3`
  letter-spacing: 1.5px;
`