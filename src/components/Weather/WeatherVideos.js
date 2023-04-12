import React from 'react';
import { WeatherVideo } from './WeatherStyles';

import rain from '../../videos/rain.mp4';
import thunderstorm from '../../videos/thunderstorm.mp4';
import clear from '../../videos/clear.mp4';
import drizzle from '../../videos/drizzle.mp4';
import snow from '../../videos/snow.mp4';
import cloudy from '../../videos/cloudy.mp4';
import { useEffect } from 'react';

/* PASTE IN WEATHERCOMP IF BACKGROUND VIDEOS WANTED 

      <WeatherVideos light={light} setLight={setLight} weatherModal={weatherModal} weather={weather} weatherDescription = {weather.weather ? `${weather.weather[0].main}` : null}/>
      
*/

export const WeatherVideos = ({ weatherModal, light, setLight, weatherDescription }) => {
 
    const videos = [
        {
            name:"Rain",
            background: rain
        },
        {
            name:"Clear",
            background: clear
        },
        {
            name:"Thunderstorm",
            background: thunderstorm
        },
        {
            name:"Drizzle",
            background: drizzle
        },
        {
            name:"Snow",
            background: snow
        },
        {
            name:"Clouds",
            background: cloudy
        },
    ]

    const videoURL = videos.find(el => el.name === weatherDescription)?.background

    console.log(weatherDescription)

    useEffect(() => {
        if(weatherDescription === "Snow" || weatherDescription === "Thunderstorm"){
            setLight(true)
            console.log(`True: ${light}`)
        } else {
            setLight(false)
            console.log(`False: ${light}`)
        }
      }, [weatherDescription]);

  return (
    <WeatherVideo weatherModal={weatherModal} key={videoURL} autoPlay loop muted>
      <source id="myVideo" src={videoURL} type='video/mp4' />
  </WeatherVideo>
  )
}
