import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MovieSectionTitle, MoviesShortListContainer, MoviesShortListContent, MovieWrapper, } from '../styles/HomepageStyles';
import { selectRecommended, selectNew, selectOriginal, selectTrending } from "../features/movie/movieSlice";


const MoviesShortList = ({ sectionName }) => {

  let title = ''
  const[extendedMovies, setExtendedMovies] = useState()

  const movies = useSelector((state) => {
    if (sectionName === 'selectRecommended') {
      title = 'Recommended for You'
      return selectRecommended(state)
    }
    else if (sectionName === 'selectNew') {
      title = 'New on Disney+'
      return selectNew(state)
    }
    else if (sectionName === 'selectOriginal') {
      title = 'Originals'
      return selectOriginal(state)
    }
    else {
      title = 'Trendings'
      return selectTrending(state)
    }
  })

  useEffect(() =>{
    setExtendedMovies([...movies, ...movies, ...movies, ...movies])
  },[movies])

  console.log(movies)

  return (
    <MoviesShortListContainer>
      <MovieSectionTitle>{title}</MovieSectionTitle>
      <MoviesShortListContent>
        {movies &&
          extendedMovies?.map((movie, key) => (
            <MovieWrapper key={key}>
              <Link to={'/details/' + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </MovieWrapper>
          ))}
      </MoviesShortListContent>
    </MoviesShortListContainer>
  );
}

export default MoviesShortList