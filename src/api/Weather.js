import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherComp } from '../components/Weather/WeatherComp';

export const Weather = ({handleModal, weatherModal, hover, open}) => {

    const [weather, setWeather] = useState({});
    const [autoLocation, setAutoLocation] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [weatherTag, setWeatherTag] = useState(false);

    const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherAPIKey}`

    const searchLocation = async () => {
        if(location === ""){
            const res = await getAutoLocation()
        } else {
            try {
                setLoading(true)
                const response = await axios.get(weatherURL).then((response) => {
                    setWeather(response.data)
                    setError(false);
                });
                setLoading(false);
            } catch (error){
                setLoading(false);
                setError(true);
                console.error(error);
            }
        }
        }

    const handleAutoLocation = (e) => {
        localStorage.setItem("autoLocation", JSON.stringify(location));
        setAutoLocation(location);  
        setWeatherTag(true);  
        const timer = setTimeout(() => {
            setWeatherTag(false);
          }, 4000);
          return () => clearTimeout(timer);
    }

    //Retrieve Local Data and set AutoLocation State to Local Storage Data
    const getAutoLocation = () => {
        if(localStorage.getItem("autoLocation") === null){
            localStorage.setItem("autoLocation", JSON.stringify("London"));
            setLocation("London");
            setAutoLocation("London");
          } else {
            let localLocation = JSON.parse(localStorage.getItem("autoLocation"));
            setLocation(localLocation);
            setAutoLocation(localLocation);
          }
    }

    useEffect(() => {
        searchLocation()
    }, [autoLocation])

  return (
    <WeatherComp location={location} weather={weather} setLocation={setLocation} searchLocation={searchLocation} handleAutoLocation={handleAutoLocation} loading={loading} error={error} autoLocation={autoLocation} handleModal={handleModal} weatherModal={weatherModal} hover={hover} open={open} weatherTag={weatherTag}/>
  )
}
