import React from 'react';
import './WeatherStyles.js';
import { WeatherSys, SysRow, SysItem, SysLine, SysText, SysIconSunrise, SysIconSunset } from './WeatherStyles.js';

export const Sys = ({ weather, convertTime }) => {

  return (
    <WeatherSys>
      <SysRow>
        {weather.sys ?
          <SysItem>
            <SysIconSunrise />
            <SysText>{convertTime(weather.sys.sunrise)}</SysText>
            </SysItem> : null}
          <SysLine></SysLine>
        {weather.sys ? 
        <SysItem><SysIconSunset /> 
        <SysText>{convertTime(weather.sys.sunset)}</SysText>
        </SysItem> : null}
      </SysRow>
    </WeatherSys>
  )
}
