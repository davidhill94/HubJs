import React from 'react';
import { FaHome } from 'react-icons/fa';
import './WeatherStyles.js';
import { HomeIcon, LocationNameRow, LocationNameDiv, LocationNameText } from './WeatherStyles.js';

export const LocationName = ({ weather, autoLocation }) => {
  return (
    <LocationNameDiv>
        <LocationNameRow>
        <LocationNameText>{weather.name}</LocationNameText>&nbsp;&nbsp;
        <h2>{weather.name === autoLocation ? <HomeIcon><FaHome /></HomeIcon> : null}</h2>
        </LocationNameRow>
    </LocationNameDiv>
  )
}
