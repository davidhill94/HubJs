import React from 'react';
import { FaHome } from 'react-icons/fa';
import './WeatherStyles.js';
import { HomeIcon } from './WeatherStyles.js';

export const LocationName = ({ weather, autoLocation }) => {
  return (
    <div className='location_name'>
        <div className='location_name_row'>
        <h1>{weather.name}</h1>&nbsp;&nbsp;
        <h2>{weather.name === autoLocation ? <HomeIcon><FaHome /></HomeIcon> : null}</h2>
        </div>
    </div>
  )
}
