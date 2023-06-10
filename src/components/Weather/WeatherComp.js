import React, {useState, useEffect} from 'react';
import './WeatherStyles.js';
import { Sys } from './Sys';
import { AltDetails } from './AltDetails';
import { Temperature } from './Temperature';
import { Current } from './Current';
import { LocationName } from './LocationName';
import { Search } from './Search';
import { LocationDate } from './LocationDate';
import { ButtonText, ButtonWrapper, CenterText, WeatherContainer, WeatherInnerWrapper, WeatherModal, WeatherTagContainer } from './WeatherStyles.js';
import WeatherTag from './WeatherTag.js';

export const WeatherComp = ({ loading, error, setLocation, weather, searchLocation, handleAutoLocation, autoLocation, weatherModal, handleModal, hover, open, location, weatherTag }) => {

  const [light, setLight] = useState(false);

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
    <WeatherContainer hover={hover} open={open} weatherModal={weatherModal}>
      <WeatherTag weatherTag={weatherTag} weatherModal={weatherModal} location={location}/>
      <ButtonWrapper>
      <ButtonText weatherModal={weatherModal} hover={hover}>Weather</ButtonText>
      </ButtonWrapper>
      <WeatherModal light={light} weatherModal={weatherModal}>
        <WeatherInnerWrapper>
        <Search setLocation={setLocation} handleAutoLocation={handleAutoLocation} searchLocation={searchLocation} />
      {loading ?
        <CenterText>Loading...</CenterText>
        :
        error ?
          <CenterText>We are unable to find this location.. Please search again!</CenterText>
          :
          <>
          <LocationDate weatherModal={weatherModal} weather={weather} convertDate={convertDate} />
          <Temperature weatherModal={weatherModal} weather={weather} />
          <Current weatherModal={weatherModal} weather={weather} />
          <AltDetails weatherModal={weatherModal} weather={weather} />
          <Sys weatherModal={weatherModal} weather={weather} convertTime={convertTime} />
          <LocationName weatherModal={weatherModal} weather={weather} autoLocation={autoLocation} />
            </>
      }
        </WeatherInnerWrapper>
      </WeatherModal>
    </WeatherContainer>
  )
}
