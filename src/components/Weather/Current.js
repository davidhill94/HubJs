import React from 'react';
import './WeatherStyles.js';
import { WeatherCurrent } from './WeatherStyles.js';

export const Current = ({ weather }) => {
  return (
    <WeatherCurrent>
        {weather.weather ? <h2>{weather.weather[0].main}</h2> : null}
              {weather.weather ? <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon"></img> : null}
    </WeatherCurrent>
  )
}
