import styled from "styled-components";

export const NewsButton = styled.button`
position: absolute;
top: ${(props) => (props.open ? "2vh" : "25%")};
left: ${(props) => (props.open ? "2vw" : "25%")};
transform: ${(props) => (props.open ? null : "translate(-50%, -50%)")};
font-size: ${(props) => (props.open ? "3rem" : "10rem")};
z-index: 100;
background-color: transparent;
border: none;
cursor: pointer;
transition: top 1s, left 1s, transform 1s, font-size 1s, color 0.05s;
color: ${(props) => (props.hover === "news" ? "white" : "lightgrey")};
`
export const ToDoButton = styled.button`
position: absolute;
top: ${(props) => (props.open ? "2vh" : "25%")};
right: ${(props) => (props.open ? "2vw" : "25%")};
transform: ${(props) => (props.open ? null : "translate(50%, -50%)")};
font-size: ${(props) => (props.open ? "3rem" : "10rem")};
z-index: 100;
background-color: transparent;
border: none;
cursor: pointer;
transition: top 1s, right 1s, transform 1s, font-size 1s, color 0.05s;
color: ${(props) => (props.hover === "todo" ? "white" : "lightgrey")};
`
export const WeatherButton = styled.button`
position: absolute;
bottom: ${(props) => (props.open ? "2vh" : "25%")};
left: ${(props) => (props.open ? "2vw" : "25%")};
transform: ${(props) => (props.open ? null : "translate(-50%, 50%)")};
font-size: ${(props) => (props.open ? "3rem" : "10rem")};
z-index: 100;
background-color: transparent;
border: none;
cursor: pointer;
transition: bottom 1s, left 1s, transform 1s, font-size 1s, color 0.05s;
color: ${(props) => (props.hover === "weather" ? "yellow" : "lightgrey")};
`
export const PracticeButton = styled.button`
position: absolute;
bottom: ${(props) => (props.open ? "2vh" : "25%")};
right: ${(props) => (props.open ? "2vw" : "25%")};
transform: ${(props) => (props.open ? null : "translate(50%, 50%)")};
font-size: ${(props) => (props.open ? "3rem" : "10rem")};
z-index: 100;
background-color: transparent;
border: none;
cursor: pointer;
transition: bottom 1s, right 1s, transform 1s, font-size 1s, color 0.05s;
color: ${(props) => (props.hover === "practice" ? "white" : "lightgrey")};
`