import styled from "styled-components";

export const NewsButton = styled.button`
position: absolute;
top: ${(props) => (props.open ? "2vh" : "25%")};
left: ${(props) => (props.open ? "2vw" : "25%")};
transform: ${(props) => (props.open ? null : "translate(-50%, -50%)")};
font-size: ${(props) => (props.open ? "3rem" : "10rem")};
z-index: 100;
background-color: transparent;
padding: 0.50rem;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 50%;
cursor: pointer;
z-index: 99;
transition: top 1s, left 1s, transform 1s, font-size 1s, color 0.05s;
color: var(--theme-tertiary);

@media screen and (max-width: 525px){
    font-size: ${(props) => (props.open ? "3rem" : "7rem")};
}
@media screen and (max-width: 325px){
    font-size: ${(props) => (props.open ? "2rem" : "5rem")};
}
`
export const ToDoButton = styled.button`
position: absolute;
top: ${(props) => (props.open ? "2vh" : "25%")};
right: ${(props) => (props.open ? "2vw" : "25%")};
transform: ${(props) => (props.open ? null : "translate(50%, -50%)")};
font-size: ${(props) => (props.open ? "3rem" : "8rem")};
z-index: 100;
background-color: transparent;
padding: 0.50rem;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 50%;
cursor: pointer;
transition: top 1s, right 1s, transform 1s, font-size 1s, color 0.05s;
color: var(--theme-tertiary);

@media screen and (max-width: 525px){
    font-size: ${(props) => (props.open ? "2.5rem" : "6rem")};
}
@media screen and (max-width: 325px){
    font-size: ${(props) => (props.open ? "1.5rem" : "4rem")};
}
`
export const WeatherButton = styled.button`
position: absolute;
bottom: ${(props) => (props.open ? "2vh" : "25%")};
left: ${(props) => (props.open ? "2vw" : "25%")};
transform: ${(props) => (props.open ? null : "translate(-50%, 50%)")};
font-size: ${(props) => (props.open ? "3rem" : "10rem")};
z-index: 100;
background-color: transparent;
padding: 0.50rem;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 50%;
cursor: pointer;
transition: bottom 1s, left 1s, transform 1s, font-size 1s, color 0.05s;
color: var(--theme-tertiary);

@media screen and (max-width: 525px){
    font-size: ${(props) => (props.open ? "3rem" : "7rem")};
}
@media screen and (max-width: 325px){
    font-size: ${(props) => (props.open ? "2rem" : "5rem")};
}
`
export const GameButton = styled.button`
position: absolute;
bottom: ${(props) => (props.open ? "2vh" : "25%")};
right: ${(props) => (props.open ? "2vw" : "25%")};
transform: ${(props) => (props.open ? null : "translate(50%, 50%)")};
font-size: ${(props) => (props.open ? "3rem" : "10rem")};
z-index: 100;
background-color: transparent;
padding: 0.50rem;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 50%;
cursor: pointer;
transition: bottom 1s, right 1s, transform 1s, font-size 1s, color 0.05s;
color: var(--theme-tertiary);

@media screen and (max-width: 525px){
    font-size: ${(props) => (props.open ? "3rem" : "7rem")};
}
@media screen and (max-width: 325px){
    font-size: ${(props) => (props.open ? "2rem" : "5rem")};
}
`