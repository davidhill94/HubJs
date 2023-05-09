import styled, { keyframes } from 'styled-components';

const delayLoad = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

export const GameCenterContainer = styled.div`
width: 100%;
    height: 100%;
    transition: all 2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: rgb(192,241,255);
    font-family: var(--font-primary);
    background: transparent;
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
opacity: ${(props) => (props.hover === "game" && props.gameModal === false ? "1" : "0")};
transition: all 0.1s ease;
`

export const GameCenterModal = styled.div`
display: ${(props) => (props.gameModal ? "flex" : "none")};
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: transparent;
z-index: 99;
position: absolute;
top: ${(props) => (props.gameModal ? "0" : "100vh")};
right: ${(props) => (props.gameModal ? "0" : "-100vw")};
transition: all 2s ease;
padding: 6rem;
animation-name: ${delayLoad};
animation-duration: 1s;
transition: all 2s ease;
`

/* GameWrapper.js */
export const GameWrapperContainer = styled.div`
width: 100%;
height: 100%;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`

/* GameCard.js */
export const GameCardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 11rem;
width: 11rem;
border: 2px solid #000;
border-radius: 25px;
margin: 1.25rem 2rem;
overflow: hidden;
`
export const GameLinkWrapper = styled.a`
display: flex;
align-items: center;
justify-content: center;
height: 11rem;
width: 11rem;
border: none;
border-radius: 25px;
cursor: pointer;
background-color: transparent;
overflow: hidden;
position: relative;
text-decoration: none;
color: #000;
`
export const GameImg = styled.img`
height: 11rem;
width: 11rem;
position: absolute;
top: 0;
left: 0;
opacity: ${(props) => (props.cardHover ? "0.2" : "1")};
filter: ${(props) => (props.cardHover ? "blur(1px)" : null)}
border-radius: 25px;
`
export const GameText = styled.p`
font-size: 1.25rem;
text-align: center;
`