import React from 'react';
import { useEffect } from 'react';
import './WeatherStyles.js';
import { WeatherCurrent, WeatherCurrentImg, WeatherCurrentText } from './WeatherStyles.js';

export const Current = ({ weather }) => {

  return (
    <WeatherCurrent>
        {weather.weather ? <WeatherCurrentText>{weather.weather[0].main}</WeatherCurrentText> : null}
              {weather.weather ? <WeatherCurrentImg src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon"></WeatherCurrentImg> : null}
    </WeatherCurrent>
  )
}
