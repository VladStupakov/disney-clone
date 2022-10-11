import React, { useEffect, useState } from 'react'
import { AddToList, BackgroundImage, Container, Content, Controls, Description, GroupWatch, Player, SubTitle, TitleImage, Trailer } from '../styles/MovieDetailsStyle'
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    async function getDocument() {
      const document = await getDoc(doc(db, 'movies', id))
      if (document.exists()) {
        setDetails(document.data())
      }
      else {
        console.log("No such document")
      }
    }
    getDocument()
  }, [id]);

  return (
    <Container>
      <BackgroundImage>
        <img alt={details.title} src={details.backgroundImg} />
      </BackgroundImage>

      <TitleImage>
        <img alt={details.title} src={details.titleImg} />
      </TitleImage>
      <Content>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddToList>
            <span />
            <span />
          </AddToList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{details.subTitle}</SubTitle>
        <Description>{details.description}</Description>
      </Content>
    </Container>
  );
}

export default MovieDetails