import React from 'react';
import { FaCloudSun, FaGamepad, FaRegListAlt, FaRegNewspaper } from 'react-icons/fa';
import { NewsButton, GameButton, ToDoButton, WeatherButton } from './ModalButtonsStyles';
import { TiArrowBack } from 'react-icons/ti'

export const ModalButtons = ({handleModal, open, newsModal, toDoModal, weatherModal, gameModal, handleHover, hover}) => {

  return (
    <div>
        <NewsButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("news")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("news")}>
          {open & newsModal ?
          <TiArrowBack />
          :
          <FaRegNewspaper /> 
          }
          </NewsButton>
        <ToDoButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("todo")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("todo")}>
          {open & toDoModal ?
          <TiArrowBack />
          :
          <>
          <FaRegListAlt />
          </>
          }
          </ToDoButton>
        <WeatherButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("weather")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("weather")}>
        {open & weatherModal ?
          <TiArrowBack />
          :
          <FaCloudSun />
          }
          </WeatherButton>
        <GameButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("game")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("game")}>
        {open & gameModal ?
          <TiArrowBack />
          :
          <FaGamepad />
          }
          </GameButton>
    </div>
  )
}
