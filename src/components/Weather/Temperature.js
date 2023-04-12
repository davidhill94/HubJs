import React from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import './WeatherStyles.js';
import { TemperatureH2, TemperatureH4, TemperatureWrapper, TempHighLow, TempItem } from './WeatherStyles.js';

export const Temperature = ({ weather }) => {
  return (
    <TemperatureWrapper>
        {weather.main ? <TemperatureH2>{weather.main.temp.toFixed()}°C</TemperatureH2> : null}
        <TempHighLow>
        {weather.main ? <TempItem><FaAngleDoubleDown /><TemperatureH4>{weather.main.temp_min.toFixed()}°C</TemperatureH4></TempItem> : null}
              {weather.main ? <TempItem><FaAngleDoubleUp /><TemperatureH4>{weather.main.temp_max.toFixed()}°C</TemperatureH4></TempItem> : null}
        </TempHighLow>
    </TemperatureWrapper>
  )
}
