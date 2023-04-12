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
background-image: ${(props) => (props.weatherModal ? `url(${weatherBackground})` : null)};
background-size: cover;
background-repeat: no-repeat;
opacity: ${(props) => (props.weatherModal ? "1" : "0")};
transition: all 2s ease-in-out;
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
    padding: 0.75rem;
    font-size: 1.25rem;
    width: 75%;
`
export const WeatherSearchSubmit = styled.button`
    padding: 0.75rem;
    margin: 0 0.25rem;
    font-size: 1.25rem;
    cursor: pointer;
`
export const WeatherSearchHome = styled.button`
    padding: 0.25rem;
    background-color: transparent;
    border: none;
    margin: 0 0.25rem;
    cursor: pointer;
    font-size: 2.25rem;
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
    width: 100%;
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
margin-right: 3.5rem;
`
export const TempHighLow = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    padding: 0 1rem;
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
    align-items: center;
    justify-content: center;
`
export const SysRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
export const SysItem = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
line-height: 4rem;
`
export const SysIconSunrise = styled(WiSunrise)`
font-size: 2.50rem;
display: block;
`
export const SysIconSunset = styled(WiSunset)`
font-size: 2.50rem;;
display: block;
`
export const SysText = styled.p`
font-size: 1.75rem;
`
export const SysLine = styled.p`
width: 90%;
height: 0.15rem;
margin-top: 0.25rem;
background-color: #000;
`

/** CURRENT.JS **/
export const WeatherCurrent = styled.div`
    grid-area: current;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const WeatherCurrentText = styled.h1`
font-size: 2.75rem;
`
export const WeatherCurrentImg = styled.img`
height: auto;
width: 12.75rem;
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