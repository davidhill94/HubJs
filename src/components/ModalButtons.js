import React from 'react';
import { FaCloudSun, FaQuestionCircle, FaRegListAlt, FaRegNewspaper } from 'react-icons/fa';
import { NewsButton, PracticeButton, ToDoButton, WeatherButton } from './ModalButtonsStyles';
import { TiArrowBack } from 'react-icons/ti'

export const ModalButtons = ({handleModal, open, newsModal, toDoModal, weatherModal, practiceModal, handleHover, hover}) => {

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
        <PracticeButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("practice")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("practice")}>
        {open & practiceModal ?
          <TiArrowBack />
          :
          <FaQuestionCircle />
          }
          </PracticeButton>
    </div>
  )
}
