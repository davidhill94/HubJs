import React from 'react';
import './WeatherStyles.js';
import { WeatherSys, SysRow, SysItem, SysLine, SysText, SysIconSunrise, SysIconSunset, SysRowIcon } from './WeatherStyles.js';

export const Sys = ({ weather, convertTime }) => {

  return (
    <WeatherSys>
      <SysRowIcon>
      {weather.sys ?
      <>
      <SysIconSunrise />
      <SysIconSunset />
      </>
      :
      null
}
      </SysRowIcon>
      <SysRow>
        {weather.sys ?
          <SysItem>
            <SysText>{convertTime(weather.sys.sunrise)}</SysText>
            </SysItem> : null}
          <SysLine></SysLine>
        {weather.sys ? 
        <SysItem> 
        <SysText>{convertTime(weather.sys.sunset)}</SysText>
        </SysItem> : null}
      </SysRow>
    </WeatherSys>
  )
}
