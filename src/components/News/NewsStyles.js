import styled from "styled-components";

export const NewsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background: rgb(192,241,255);
font-family: var(--font-primary);
background: ${(props) => (props.hover === "news" || props.newsModal & props.open ? "-moz-linear-gradient(to right, #654ea3, #eaafc8)" : "-moz-linear-gradient(315deg, #2C5364, #203A43, #0F2027)")};
background: ${(props) => (props.hover === "news" || props.newsModal & props.open ? "-webkit-linear-gradient(to right, #654ea3, #eaafc8)" : "-webkit-linear-gradient(315deg, #2C5364, #203A43, #0F2027)")};
background: ${(props) => (props.hover === "news" || props.newsModal & props.open ? "linear-gradient(to right, #654ea3, #eaafc8);" : "linear-gradient(315deg, #2C5364, #203A43, #0F2027)")};
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c0f1ff",endColorstr="#70ddfe",GradientType=1);
`

export const ButtonText = styled.h2`
position: absolute;
bottom: 5%;
right: 50%;
transform: translateX(50%);
font-size: 2rem;
opacity: ${(props) => (props.hover === "news" ? "1" : "0")};
transition: all 0.1s ease;
`

export const NewsModal = styled.div`
display: flex;
width: 100vw;
height: 100vh;
background-color: pink;
z-index: 99;
position: absolute;
bottom: ${(props) => (props.newsModal ? "0" : "100vh")};
left: ${(props) => (props.newsModal ? "0" : "-100vw")};
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