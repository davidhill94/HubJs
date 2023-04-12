import styled from 'styled-components'

export const PracticeContainer = styled.div`
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
opacity: ${(props) => (props.hover === "practice" && props.practiceModal === false ? "1" : "0")};
transition: all 0.1s ease;
`

export const PracticeModal = styled.div`
display: flex;
width: 100vw;
height: 100vh;
background-color: pink;
z-index: 99;
position: absolute;
top: ${(props) => (props.practiceModal ? "0" : "100vh")};
right: ${(props) => (props.practiceModal ? "0" : "-100vw")};
transition: all 2s ease;
padding: 6rem;
`