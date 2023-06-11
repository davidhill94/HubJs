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
text-align: center;

@media screen and (max-width: 525px){
    font-size: 1.5rem;
}
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
    padding: 4rem;

    @media screen and (max-width: 600px){
        padding 4rem 3rem;
        grid-template-rows: 20% 20% 20% 20%;
        grid-template-columns: 50% 50%;
        grid-template-areas: "search search"
    "temp current"
    "sun sun"
    "alt name";
    }

    @media screen and (max-width: 325px){
        padding 4rem 1.5rem;
        grid-template-rows: 20% 25% 25% 20%;
    }
`

export const CenterText = styled.p`
position absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
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
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const WeatherSearchSubmit = styled.button`
    height: 3.25rem;
    width: 4.75rem;
    border-radius: 3px;
    margin: 0 0.25rem;
    font-size: 1.25rem;
    cursor: pointer;
    background-color: var(--theme-secondary);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    @media screen and (max-width: 600px){
        display: none;
    }
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

    @media screen and (max-width: 600px){
        display: none;
    }
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

    @media screen and (max-width: 600px){
        align-items: start;
        width: 90%;
    }
    @media screen and (max-width: 600px){
        width: 100%;
        justify-content: start;
    }
`
export const TemperatureH2 = styled.h2`
    font-size: 6.75rem;

    @media screen and (max-width: 960px){
        font-size: 4.75rem;
    }
    @media screen and (max-width: 600px){
        font-size: 3.75rem;
    }
    @media screen and (max-width: 375px){
        font-size: 2.75rem;
    }
`
export const TemperatureH4 = styled.h4`
font-size: 1.75rem;

@media screen and (max-width: 600px){
        font-size: 1.25rem;
}
`
export const TempHighLow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 600px){
        width: 60%;
    }
`
export const TempItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

/** LOCATIONNAME.JS **/
export const LocationNameDiv = styled.div`
    grid-area: name;
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 1rem;

    @media screen and (max-width: 600px){
        margin-top: 0;
        width: 100%;
        justify-content: end;
    }
`
export const LocationNameRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: end;
        margin-left: 1rem;
        justify-content: start;
    }
`
export const LocationNameText = styled.div`
    font-size: 4.75rem;

    @media screen and (max-width: 960px){
        font-size: 3.75rem;
    }
    @media screen and (max-width: 600px){
        font-size: 1.75rem;
    }
    @media screen and (max-width: 375px){
        font-size: 1.25rem;
        margin-top: 0.25rem;
    }
`
export const HomeIcon = styled.p`
    font-size: 1.75rem;
    margin-top: 2.15rem;

    @media screen and (max-width: 600px){
    margin-top: 1.15rem;
    }
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

    @media screen and (max-width: 600px){
        justify-content: start;
    }
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

@media screen and (max-width: 600px){
    font-size: 1.5rem;
}
@media screen and (max-width: 375px){
    font-size: 1.25rem;
}
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
    @media screen and (max-width: 600px){
        flex-direction: column;
        justify-content: start;
        align-items: end;
    }
`
export const WeatherCurrentText = styled.h1`
font-size: 2.75rem;

@media screen and (max-width: 600px){
        font-size: 2rem;
}
`
export const WeatherIcon = styled.div`
font-size: 7.75rem;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 600px){
        font-size: 5rem;
}
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

    @media screen and (max-width: 600px){
        justify-content: start;
        align-items: start;
    }
`
export const Row = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;

@media screen and (max-width: 960px){
    flex-direction: column;
    margin-left: 2rem;
}
@media screen and (max-width: 600px){
    margin-left: 0rem;
    line-height: 0;
}

`
export const AltRow = styled.div`
    display: flex;
    width: 10rem;
    align-items: center;
    justify-content: start;

    @media screen and (max-width: 600px){
        width: 6rem;
    }
`
export const AltRowH2 = styled.h2`
    font-size: 1.25rem;

    @media screen and (max-width: 600px){
        font-size: 1rem;
    }
`
export const AltIcon = styled.p`
    font-size: 3.75rem;

    @media screen and (max-width: 600px){
        font-size: 2rem;
    }
`

/* SETWEATHERMODAL.JS */
export const WeatherTagContainer = styled.div`
width: auto;
height: 50px;
padding: 0 1.5rem;
background-color: var(--theme-secondary);
position: absolute;
left: ${(props) => (props.weatherTag ? "-1%" : "-100%")};
color: #000;
top: 5%;
z-index: 100;
display: flex;
align-items: center;
justify-content: center;
border-radius: 3px;
border: 2px solid #000;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
transition: all 1s ease;
opacity: ${(props) => (props.weatherTag ? "1" : "0")};
pointer-events: ${(props) => (props.weatherTag ? "auto" : "none")};
`