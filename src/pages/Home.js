import React, { useState } from 'react';
import { News } from '../api/News';
import { Weather } from '../api/Weather';
import { ToDo } from '../components/ToDo/ToDoIndex';
import { ModalButtons } from '../components/ModalButtons';
import { BottomLeft, BottomRight, CenterDiv, Grid, TopLeft, TopRight } from './HomeStyles';
import { Welcome } from '../components/Welcome/Welcome';
import { GameCenter } from '../components/GameCenter/GameCenter';

export const Home = () => {
  const [newsModal, setNewsModal] = useState(false);
  const [toDoModal, setToDoModal] = useState(false);
  const [weatherModal, setWeatherModal] = useState(false);
  const [gameModal, setGameModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState("");

  const handleHover = (name) => {
        setHover(name)
        console.log(hover)
  }

  const handleModal = (name) => {
    if (name === "weather") {
      setWeatherModal(!weatherModal)
      setToDoModal(false)
      setNewsModal(false)
      setGameModal(false)
      setOpen(true);
      console.log("WEATHER");
    } else if (name === "news") {
      setNewsModal(!newsModal)
      setToDoModal(false)
      setWeatherModal(false)
      setGameModal(false)
      setOpen(true);
      console.log("NEWS");
    } else if (name === "todo") {
      setToDoModal(!toDoModal)
      setNewsModal(false)
      setWeatherModal(false)
      setGameModal(false)
      setOpen(true);
      console.log("TODO");
    } else if (name === "game") {
      setGameModal(!gameModal)
      setToDoModal(false)
      setNewsModal(false)
      setWeatherModal(false)
      setOpen(true);
      console.log("GAME");
    }
    if (name === "weather" & weatherModal) {
      setOpen(false)
    }
    if (name === "news" & newsModal) {
      setOpen(false)
    }
    if (name === "todo" & toDoModal) {
      setOpen(false)
    }
    if (name === "game" & gameModal) {
      setOpen(false)
    }
  }



  return (
    <Grid>
      <TopLeft open={open} newsModal={newsModal}>
        <News
          handleModal={handleModal}
          newsModal={newsModal}
          hover={hover}
          open={open}
        ></News>
      </TopLeft>
      <TopRight open={open} toDoModal={toDoModal}>
        <ToDo
          handleModal={handleModal}
          toDoModal={toDoModal}
          hover={hover}
          open={open}
        ></ToDo>
      </TopRight>
      <BottomLeft weatherModal={weatherModal} open={open}>
        <Weather
          handleModal={handleModal}
          weatherModal={weatherModal}
          hover={hover}
          open={open}
        ></Weather>
      </BottomLeft>
      <BottomRight gameModal={gameModal} open={open}>
        <GameCenter
          handleModal={handleModal}
          gameModal={gameModal}
          hover={hover}
          open={open}
        ></GameCenter>
      </BottomRight>
      <CenterDiv open={open}>
        <Welcome />
      </CenterDiv>
      <ModalButtons
        handleModal={handleModal}
        open={open}
        newsModal={newsModal}
        toDoModal={toDoModal}
        weatherModal={weatherModal}
        gameModal={gameModal}
        hover={hover}
        handleHover={handleHover}
      />
    </Grid>
  )
}
