import React from 'react';
import './WeatherStyles.js';
import { WeatherSys } from './WeatherStyles.js';

export const Sys = ({ weather, convertTime }) => {

  return (
    <WeatherSys>
        {weather.sys ? <h2>Sunrise: {convertTime(weather.sys.sunrise)}</h2> : null}
              {weather.sys ? <h2>Sunset: {convertTime(weather.sys.sunset)}</h2> : null}
    </WeatherSys>
  )
}
