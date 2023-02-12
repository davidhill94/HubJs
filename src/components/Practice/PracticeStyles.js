import styled from 'styled-components'

export const PracticeContainer = styled.div`
width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const PracticeButton = styled.button`
font-size: 5rem;
padding: 1rem;
z-index: 100;
background-color: transparent;
border: none;
cursor: pointer;
color: yellow;
`

export const PracticeModal = styled.div`
display: flex;
width: ${(props) => (props.open ? "100vw" : "0")};
height: ${(props) => (props.open ? "100vh" : "0")};
background-color: pink;
z-index: 99;
position: absolute;
top: ${(props) => (props.open ? "0" : "100vh")};
right: 0;
transition: all 2s ease;
`