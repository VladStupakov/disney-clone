import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav`
position: fixed;
top: 0;
right: 0;
left: 0;
height: 70px;
background-color: #090b13;
display: flex;
align-items: center;
padding: 0 40px;
z-index: 3;
@media (max-width: 1106px) {
    height: 140px;
  }
`

export const Logo = styled.a`
padding: 0;
width: 100px;
min-width: 100px;
margin-top: 8px;
`

export const NavMenu = styled.ul`
  display: flex;
  margin-left: 40px;
  height: 40px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media (max-width: 1106px) {
    transform: translatey(-20px);
  }
  @media (max-width: 768px){
    display: none;
  }
`

export const MenuItem = styled(Link)`
  display: flex;
  height: 100%;
  cursor: pointer;
  position: relative;
  margin-right: 22px;
  align-items: center;
  img {
    min-width: 30px;
    width: 30px;
    @media (max-width: 1250px){
      display: none;
    }
    transition: all 200ms linear 0s;
  }
  span {
    text-transform: uppercase;
    color: rgb(249, 249, 249);
    font-size: 22px;
    letter-spacing: 1.42px;
    position: relative;
    &:before {
      height: 2px;
      bottom: -4px;
      left: 0px;
      right: 0px;
      background-color: rgb(249, 249, 249);
      content: "";      
      position: absolute;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      width: auto;
    }
  }
  &:hover {
    span:before {
      transform: scaleX(1);      
    }
  }
  
`

export const LoginBtn = styled.a`
  padding: 12px ;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  min-width: 90px;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  transition: all .2s ease 0s;
  position: absolute;
  right: 30px;
  &:hover{
    background-color: #f9f9f9;
    color: #000;
  }
`

export const SignOut = styled.div`
  display: flex;
  width: 34px;
  border: 2px solid #f9f9f9;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 30px;
`

export const ProfilePicture = styled.img`
  width: 100%;
  border-radius: 50%;
`

export const SignOutBtn = styled.button`
  position: absolute;
  top: 34px;
  right: 15px;
  padding: 5px;
  min-width: 100px;
  background-color: #090b13;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  color: #f9f9f9;
  cursor: pointer;
  opacity: ${props => props.visibility ? 1 : 0};
  transition-duration: .3s;
  &:hover{
    background-color: #20232e;
  }
`


