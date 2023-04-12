import React from 'react';
import { FaCloudSun, FaHome, FaQuestionCircle, FaRegListAlt, FaRegNewspaper } from 'react-icons/fa';
import { NewsButton, PracticeButton, ToDoButton, WeatherButton } from './ModalButtonsStyles';

export const ModalButtons = ({handleModal, open, newsModal, toDoModal, weatherModal, practiceModal, handleHover, hover}) => {

  return (
    <div>
        <NewsButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("news")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("news")}>
          {open & newsModal ?
          <FaHome />
          :
          <FaRegNewspaper /> 
          }
          </NewsButton>
        <ToDoButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("todo")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("todo")}>
          {open & toDoModal ?
          <FaHome />
          :
          <>
          <FaRegListAlt />
          </>
          }
          </ToDoButton>
        <WeatherButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("weather")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("weather")}>
        {open & weatherModal ?
          <FaHome />
          :
          <FaCloudSun />
          }
          </WeatherButton>
        <PracticeButton weatherModal={weatherModal} hover={hover} onMouseEnter={() => handleHover("practice")} onMouseLeave={() => handleHover("")} open={open} onClick={() => handleModal("practice")}>
        {open & practiceModal ?
          <FaHome />
          :
          <FaQuestionCircle />
          }
          </PracticeButton>
    </div>
  )
}
