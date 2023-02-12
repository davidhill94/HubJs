import React from 'react';
import './WeatherStyles.js';

import { FaHome } from 'react-icons/fa';
import { WeatherSearchHome, WeatherSearchInput, WeatherSearchSubmit, WeatherSearchWrapper } from './WeatherStyles.js';

export const Search = ({ searchLocation, setLocation, handleAutoLocation }) => {
    return (
        <WeatherSearchWrapper>
            <WeatherSearchInput
                type="text"
                onChange={e => setLocation(e.target.value)}
                placeholder="Enter Location"
                onKeyPress={(e) => { if (e.key === "Enter") { searchLocation() } }}
            />
            <WeatherSearchSubmit
                type="submit"
                onClick={searchLocation}
            >
                Enter
            </WeatherSearchSubmit>
            <WeatherSearchHome
                onClick={handleAutoLocation}>
                <FaHome className='home_icon'/>
            </WeatherSearchHome>
        </WeatherSearchWrapper>
    )
}
