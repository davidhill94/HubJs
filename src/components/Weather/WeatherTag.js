import React from 'react';
import { WeatherTagContainer } from './WeatherStyles';

const WeatherTag = ({ location, weatherModal, weatherTag }) => {
  return (
    weatherModal 
    ?
    <WeatherTagContainer weatherModal={weatherModal} weatherTag={weatherTag}>"{location}" set as default search</WeatherTagContainer>
    :
    <></>
  )
}

export default WeatherTag