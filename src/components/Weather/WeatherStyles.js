import styled from 'styled-components';

/* WEATHERCOMP.JS */

export const WeatherContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
font-family: var(--font-primary);
background: rgb(192,241,255);
background: ${(props) => (props.hover === "weather" || props.weatherModal & props.open ? "-moz-linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%)" : "-moz-linear-gradient(225deg, #2C5364, #203A43, #0F2027)")};
background: ${(props) => (props.hover === "weather" || props.weatherModal & props.open ? "-webkit-linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%)" : "-webkit-linear-gradient(225deg, #2C5364, #203A43, #0F2027)")};
background: ${(props) => (props.hover === "weather" || props.weatherModal & props.open ? "linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%);" : "linear-gradient(225deg, #2C5364, #203A43, #0F2027)")};
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c0f1ff",endColorstr="#70ddfe",GradientType=1);
`

export const WeatherModal = styled.div`
display: flex;
width: 100vw;
height: 100vh;
z-index: 99;
position: absolute;
top: ${(props) => (props.weatherModal ? "0" : "100vh")};
left: ${(props) => (props.weatherModal ? "0" : "-100vw")};
transition: all 1s ease;
background: rgb(192,241,255);
background: ${(props) => (props.hover ? "-moz-linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%)" : "-moz-linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%)")};
background: ${(props) => (props.hover ? "-webkit-linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%)" : "-webkit-linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%)")};
background: ${(props) => (props.hover ? "linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%);" : "linear-gradient(225deg, rgba(192,241,255,1) 0%, rgba(112,221,254,1) 100%)")}
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c0f1ff",endColorstr="#70ddfe",GradientType=1);
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
opacity: ${(props) => (props.hover === "weather" ? "1" : "0")};
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
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const WeatherSearchInput = styled.input`
    padding: 0.25rem;
`
export const WeatherSearchSubmit = styled.button`
    padding: 0.25rem;
    margin: 0 0.25rem;
    cursor: pointer;
`
export const WeatherSearchHome = styled.button`
    padding: 0.25rem;
    background-color: transparent;
    border: none;
    margin: 0 0.25rem;
    cursor: pointer;
    font-size: 1.25rem;
`

/** LOCATIONDATE.JS **/
export const LocationDateWrapper = styled.div`
    grid-area: date;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: beige;
`
export const LocationDateText = styled.h2`
    font-size: 1rem;
`

/** TEMPERATURE.JS **/
export const TemperatureWrapper = styled.div`
    grid-area: temp;
    width: 100%;
    height: 100%;
    background-color: beige;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TemperatureH2 = styled.h2`
    font-size: 2rem;
`
export const TemperatureH4 = styled.h4`
font-size: 1rem;
`
export const TempHighLow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
`
export const TempItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

/** LOCATIONNAME.JS **/
export const LocationName = styled.div`
    grid-area: name;
    width: 100%;
    height: 100%;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LocationNameRow =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HomeIcon = styled.p`
    margin: -0.25rem;
`

/** SYS.JS **/
export const WeatherSys = styled.div`
    grid-area: sun;
    width: 100%;
    height: 100%;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
`

/** CURRENT.JS **/
export const WeatherCurrent = styled.div`
    grid-area: current;
    width: 100%;
    height: 100%;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
`

/** ALT.JS **/
export const AltDetailsWrapper = styled.div`
    grid-area: alt;
    width: 100%;
    height: 100%;
    background-color: beige;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const AltRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const AltRowH2 = styled.h2`
    font-size: 1rem;
`
export const AltIcon = styled.p`
    font-size: 1.5rem;
`