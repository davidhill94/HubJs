import React from 'react';
import './WeatherStyles.js';

import { WiBarometer, WiHumidity, WiStormWarning, WiThermometer } from 'react-icons/wi';
import { AltRow, AltDetailsWrapper, AltRowH2, AltIcon, Row } from './WeatherStyles.js';

export const AltDetails = ({ weather }) => {
  return (
    <AltDetailsWrapper>
      <Row>
        {weather.main ?
          <AltRow>
            <AltIcon>
              <WiBarometer />
            </AltIcon>
            <AltRowH2>{weather.main.pressure}hPa</AltRowH2>
          </AltRow> : null}
        {weather.wind ?
          <AltRow>
            <AltIcon>
              <WiStormWarning />
            </AltIcon>
            <AltRowH2>{weather.wind.speed.toFixed()}km/h</AltRowH2>
          </AltRow> : null}
      </Row>
      <Row>
        {weather.main ?
          <AltRow>
            <AltIcon>
              <WiHumidity />
            </AltIcon>
            <AltRowH2>{weather.main.humidity}%</AltRowH2>
          </AltRow> : null}
        {weather.main ?
          <AltRow>
            <AltIcon>
              <WiThermometer />
            </AltIcon>
            <AltRowH2>{weather.main.feels_like.toFixed()}°C</AltRowH2>
          </AltRow> : null}
      </Row>
    </AltDetailsWrapper>
  )
}
