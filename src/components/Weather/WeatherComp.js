import React from 'react';
import './WeatherStyles.js';
import { Sys } from './Sys';
import { AltDetails } from './AltDetails';
import { Temperature } from './Temperature';
import { Current } from './Current';
import { LocationName } from './LocationName';
import { Search } from './Search';
import { LocationDate } from './LocationDate';
import { ButtonText, ButtonWrapper, WeatherContainer, WeatherInnerWrapper, WeatherModal } from './WeatherStyles.js';
export const WeatherComp = ({ loading, error, setLocation, weather, searchLocation, handleAutoLocation, autoLocation, weatherModal, handleModal, hover, open }) => {


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
      <ButtonWrapper>
      <ButtonText hover={hover}>Weather</ButtonText>
      </ButtonWrapper>
      <WeatherModal>
        <WeatherInnerWrapper>
        <Search setLocation={setLocation} handleAutoLocation={handleAutoLocation} searchLocation={searchLocation} />
      {loading ?
        <h3>Loading...</h3>
        :
        error ?
          <h3>We are unable to find this location.. Please search again!</h3>
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
