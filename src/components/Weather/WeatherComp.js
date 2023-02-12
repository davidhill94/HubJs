import React from 'react';
import './WeatherStyles.js';
import { Sys } from './Sys';
import { AltDetails } from './AltDetails';
import { Temperature } from './Temperature';
import { Current } from './Current';
import { LocationName } from './LocationName';
import { Search } from './Search';
import { LocationDate } from './LocationDate';

export const WeatherComp = ({ loading, error, setLocation, weather, searchLocation, handleAutoLocation, autoLocation }) => {

  const convertTime = (time) => {
    const timestamp = time;
    const timezone = weather.timezone;
    const date = new Date((timestamp + timezone) * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const correctedMinutes = minutes <= 9 ? "0" + minutes : minutes;
    const formattedTime = hours + ":" + correctedMinutes;
    const post = hours < 12 ? "am" : "pm";
    return formattedTime + post
  }

  const convertDate = (date) => {
    const dt = date;
    const day = new Date(dt * 1000);

    return day.toDateString();
  }

  return (
    <WeatherComp>
      <Search setLocation={setLocation} handleAutoLocation={handleAutoLocation} searchLocation={searchLocation} />
      {loading ?
        <h3>Loading...</h3>
        :
        error ?
          <h3>We are unable to find this location.. Please search again!</h3>
          :
          <>
          <LocationDate weather={weather} convertDate={convertDate} />
          <Temperature weather={weather} />
          <Current weather={weather} />
          <AltDetails weather={weather} />
          <Sys weather={weather} convertTime={convertTime} />
          <LocationName weather={weather} autoLocation={autoLocation} />
            </>
      }
    </WeatherComp>
  )
}
