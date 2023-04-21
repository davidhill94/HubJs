import styled, { keyframes } from 'styled-components';
import { WiSunrise, WiSunset } from 'react-icons/wi';
import weatherBackground from '../../images/weatherBackground.png';

const delayLoad = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

/* WEATHERCOMP.JS */

export const WeatherContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
font-family: var(--font-primary);
position: relative;
`

export const WeatherVideo = styled.video`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
object-fit: cover;
display: ${(props) => (props.weatherModal ? "block" : "none")};
`

export const WeatherModal = styled.div`
display: ${(props) => (props.weatherModal ? "flex" : "none")};
height: 100vh;
width: 100vw;
z-index: 99;
transition: all 1s ease;
animation-name: ${delayLoad};
animation-duration: 1s;
background-color: transparent;
color: ${(props) => (props.light ? "white" : "black")};
background-image: ${(props) => (props.weatherModal ? `url(${weatherBackground})` : null)};
background-size: cover;
background-repeat: no-repeat;
opacity: ${(props) => (props.weatherModal ? "1" : "0")};
transition: opacity 2s ease-in-out;
`

export const ButtonWrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
position: relative;
align-items: center;
justify-content: center;
`

export const ButtonText = styled.h2`
position: absolute;
bottom: 5%;
right: 50%;
transform: translateX(50%);
font-size: 2rem;
opacity: ${(props) => (props.hover === "weather" && props.weatherModal === false ? "1" : "0")};
transition: all 0.1s ease;
`

export const WeatherInnerWrapper = styled.div`
display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 20% 40% 20% 20%;
    grid-template-areas: "search search date"
    "temp current alt"
    "sun sun sun"
    "name name name";
    width: 100vw;
height: 100vh;
    font-family: var(--font-primary);
    grid-gap: 0.1rem;
    padding: 6rem;
`

/** SEARCH.JS **/
export const WeatherSearchWrapper = styled.div`
    grid-area: search;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
`
export const WeatherSearchInput = styled.input`
    height: 3.25rem;
    padding: 0.75rem;
    font-size: 1.25rem;
    border-radius: 3px;
    width: 75%;
    margin: 0 0.25rem;
`
export const WeatherSearchSubmit = styled.button`
    height: 3.25rem;
    width: 4.75rem;
    border-radius: 3px;
    margin: 0 0.25rem;
    font-size: 1.25rem;
    cursor: pointer;
    background-color: var(--theme-secondary);
`
export const WeatherSearchHome = styled.button`
    height: 3.25rem;
    width: 3.25rem;
    border: none;
    background-color: transparent;
    margin: 0 0.25rem;
    cursor: pointer;
    font-size: 1.50rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

/** LOCATIONDATE.JS **/
export const LocationDateWrapper = styled.div`
    grid-area: date;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LocationDateText = styled.h2`
    font-size: 1.25rem;
`

/** TEMPERATURE.JS **/
export const TemperatureWrapper = styled.div`
    grid-area: temp;
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`
export const TemperatureH2 = styled.h2`
    font-size: 6.75rem;
`
export const TemperatureH4 = styled.h4`
font-size: 1.75rem;
`
export const TempHighLow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const TempItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

/** LOCATIONNAME.JS **/
export const LocationNameDiv = styled.div`
    grid-area: name;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 1rem;
`
export const LocationNameRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LocationNameText = styled.div`
    font-size: 4.75rem;
`
export const HomeIcon = styled.p`
    font-size: 1.75rem;
    margin-top: 2.15rem;
`

/** SYS.JS **/
export const WeatherSys = styled.div`
    grid-area: sun;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.25rem 0 0.25rem 0;
    line-height: 1rem;
`
export const SysRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
export const SysRowIcon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const SysItem = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
`
export const SysIconSunrise = styled(WiSunrise)`
font-size: 3.50rem;
display: block;
`
export const SysIconSunset = styled(WiSunset)`
font-size: 3.50rem;;
display: block;
`
export const SysText = styled.p`
font-size: 1.75rem;
`
export const SysLine = styled.p`
width: 90%;
height: 0.15rem;
margin: 0.25rem 0.5rem 0 0.5rem;
background-color: #000;
`

/** CURRENT.JS **/
export const WeatherCurrent = styled.div`
    grid-area: current;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
`
export const WeatherCurrentText = styled.h1`
font-size: 2.75rem;
`
export const WeatherIcon = styled.div`
font-size: 7.75rem;
display: flex;
align-items: center;
justify-content: center;
`

/** ALT.JS **/
export const AltDetailsWrapper = styled.div`
    grid-area: alt;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Row = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const AltRow = styled.div`
    display: flex;
    width: 10rem;
    align-items: center;
    justify-content: start;
`
export const AltRowH2 = styled.h2`
    font-size: 1.25rem;
`
export const AltIcon = styled.p`
    font-size: 3.75rem;
`