import React from 'react';
import './WeatherStyles.js';
import { WeatherCurrent, WeatherIcon, WeatherCurrentText } from './WeatherStyles.js';
import { WiRain, WiDaySunny, WiCloudy, WiLightning, WiSnow, WiRainMix } from 'react-icons/wi';

export const Current = ({ weather }) => {

  const iconData = [
    {
        name:"Rain",
        icon: <WiRain/>
    },
    {
        name:"Clear",
        icon: <WiDaySunny/>
    },
    {
        name:"Thunderstorm",
        icon: <WiLightning/>
    },
    {
        name:"Drizzle",
        icon: <WiRainMix/>
    },
    {
        name:"Snow",
        icon: <WiSnow/>
    },
    {
        name:"Clouds",
        icon: <WiCloudy/>
    },
]

const weatherIcon = iconData.find(el => el.name === weather.weather[0].main)?.icon
console.log(weatherIcon)

  return (
    <WeatherCurrent>
        {weather.weather ? <WeatherCurrentText>{weather.weather[0].main}</WeatherCurrentText> : null}
              {weather.weather ? <WeatherIcon>{weatherIcon}</WeatherIcon> : null}
    </WeatherCurrent>
  )
}
