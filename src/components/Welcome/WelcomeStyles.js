import styled from "styled-components";

export const WelcomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-family: var(--font-primary);
color: var(--theme-tertiary);
width: auto;
height: auto;
`

//WELCOMETIME.JS
export const WelcomeWrapper = styled.div`
display: flex;
flex-direction: column;
align-items; center;
justify-content: center;
`
export const WelcomeHeader = styled.h1`
font-size: 3rem;
font-family: var(--font-primary);
white-space: nowrap;

@media screen and (max-width: 525px){
    font-size: 2rem;
}
`
export const WelcomeInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const WelcomeTimeDisplay = styled.h3`
font-size: 1.25rem;
`
export const WelcomeDateDisplay = styled.h3`
font-size: 1.25rem;
`

// WELCOMELOGO.JS
export const Logo = styled.img`
width: 10rem;
height: auto;

@media screen and (max-width: 1024px){
    width: 8rem;
}
@media screen and (max-width: 768px){
    width: 6rem;
}
@media screen and (max-width: 550px){
    width: 4rem;
}
`