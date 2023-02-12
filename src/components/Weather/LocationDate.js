import React from 'react';
import './WeatherStyles.js';
import { LocationDateText, LocationDateWrapper } from './WeatherStyles.js';

export const LocationDate = ({weather, convertDate}) => {
  return (
    <LocationDateWrapper>
        {weather ? <LocationDateText>{convertDate(weather.dt)}</LocationDateText> : null}
    </LocationDateWrapper>
  )
}
