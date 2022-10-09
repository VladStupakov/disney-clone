import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImageSlider from '../components/ImageSlider'
import MoviesShortList from '../components/MoviesShortList'
import StudioShorts from '../components/StudioShorts'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
import db from '../firebase'
import { Container } from '../styles/HomepageStyles'

const Home = () => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    async function fetchData(){
      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }

        dispatch(
          setMovies({
            recommend: recommends,
            new: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    }    
    fetchData()
  }, [userName]);


  return (
    <Container>
      <ImageSlider />
      <StudioShorts />
      <MoviesShortList sectionName={'selectRecommended'} />
      <MoviesShortList sectionName={'selectNew'} />
      <MoviesShortList sectionName={'selectOriginal'} />
      <MoviesShortList sectionName={'selectTrending'} />
    </Container>
  )
}

export default Home