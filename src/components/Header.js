import { signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../firebase'
import { Container, LoginBtn, Logo, MenuItem, NavMenu, ProfilePicture, SignOut, SignOutBtn, } from '../styles/HeaderStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  selectUserName,
  selectUserPicture,
  setSignOutState,
  setUserDetails
} from '../features/user/userSlice'

const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = useSelector(selectUserName)
  const userPicture = useSelector(selectUserPicture)

  const [signoutVisibility, setSignoutVisibility] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        navigate('/home')
      }
    })
  }, [username])

  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider).then(result => {
      setUser(result.user)
    }).catch(error => {
      alert(error.message)
    })
  }

  const setUser = user => {
    dispatch(
      setUserDetails({
        name: user.displayName,
        email: user.email,
        picture: user.photoURL
      })
    )
  }

  const toggleSignOutVisibility = () => {
    setSignoutVisibility(prev => !prev)
  }

  const handleSignOut = () => {
    auth.signOut().then(() =>{
      dispatch(setSignOutState())
      navigate('/')
    })
  }

  return (
    <Container>
      <Logo>
        <img src='/images/logo.svg' alt='Disney' />
      </Logo>
      {
        username ?
          <>
            <NavMenu>
              <MenuItem to='/home'>
                <img src='/images/home-icon.svg' alt='Home' />
                <span>Home</span>
              </MenuItem>
              <MenuItem to='/search'>
                <img src='/images/search-icon.svg' alt='Search' />
                <span>Search</span>
              </MenuItem>
              <MenuItem to='watchlist'>
                <img src='/images/watchlist-icon.svg' alt='Watchlist' />
                <span>watchlist</span>
              </MenuItem>
              <MenuItem to='originals'>
                <img src='/images/original-icon.svg' alt='Originals' />
                <span>originals</span>
              </MenuItem>
              <MenuItem to='movies'>
                <img src='/images/movie-icon.svg' alt='Movies' />
                <span>movies</span>
              </MenuItem>
              <MenuItem to='series'>
                <img src='/images/series-icon.svg' alt='Series' />
                <span>series</span>
              </MenuItem>
            </NavMenu>
            <SignOut onClick={toggleSignOutVisibility}>
              <ProfilePicture src={userPicture} />
              <SignOutBtn visibility={signoutVisibility} onClick={handleSignOut}>Sign out</SignOutBtn>
            </SignOut>
          </>
          :
          <>
            <LoginBtn onClick={handleGoogleAuth}>
              Log In
            </LoginBtn>
          </>
      }
    </Container>
  )
}


export default Header