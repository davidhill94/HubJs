import styled, { keyframes } from "styled-components";

const delayLoad = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

export const NewsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background: rgb(192,241,255);
font-family: var(--font-primary);
background: transparent;
`

export const ButtonText = styled.h2`
position: absolute;
bottom: 5%;
right: 50%;
transform: translateX(50%);
font-size: 2rem;
opacity: ${(props) => (props.hover === "news" && props.newsModal === false ? "1" : "0")};
transition: all 0.1s ease;
`

export const NewsModal = styled.div`
display: ${(props) => (props.newsModal ? "flex" : "none")};
width: 100vw;
height: 100vh;
background-color: transparent;
z-index: 99;
animation-name: ${delayLoad};
animation-duration: 1s;
transition: all 2s ease;
padding: 6rem;
`
export const NewsModalWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
`
export const SearchInput = styled.input`
padding: 0.5rem;
`
export const SearchSubmit = styled.button`
padding: 0.5rem;
`
export const SetAutoButton = styled.button`
padding: 0.5rem;
`
export const NewsInnerContainer = styled.div`
display: flex;
flex-direction: column;
`
export const LoadingText = styled.h2`
font-size: 1rem;
`
export const ErrorMessage = styled.h2`
font-size: 1rem;
`
export const ResultsDiv = styled.div`
display: flex;
flex-direction: column;
`
export const ArticleTitle = styled.div`
font-size: 1rem;
`
export const NoResultText = styled.h3`
font-size: 1rem;
`