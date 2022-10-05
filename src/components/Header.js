import React from 'react'
import { Container, LoginBtn, Logo, MenuItem, NavMenu,} from '../styles/HeaderStyles'

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src='/images/logo.svg' alt='Disney' />
      </Logo>
      <NavMenu>
        <MenuItem>
          <a href='/home'>
            <img src='/images/home-icon.svg' alt='Home' />
            <span>Home</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='/search'>
            <img src='/images/search-icon.svg' alt='Search' />
            <span>Search</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='/watchlist'>
            <img src='/images/watchlist-icon.svg' alt='Watchlist' />
            <span>watchlist</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='/originals'>
            <img src='/images/original-icon.svg' alt='Originals' />
            <span>originals</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='/movies'>
            <img src='/images/movie-icon.svg' alt='Movies' />
            <span>movies</span>
          </a>
        </MenuItem>
        <MenuItem>
          <a href='/series'>
            <img src='/images/series-icon.svg' alt='Series' />
            <span>series</span>
          </a>
        </MenuItem>
      </NavMenu>
      <LoginBtn>
        Log In
      </LoginBtn>
    </Container>
  )
}


export default Header