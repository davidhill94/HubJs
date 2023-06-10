import styled, { keyframes } from "styled-components";

const delayLoad = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

export const NewsContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-family: var(--font-primary);
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
height: 100%;
background-color: transparent;
z-index: 99;
animation-name: ${delayLoad};
animation-duration: 1s;
transition: all 2s ease;
padding: 0rem 0rem 3rem 0rem;
`

export const NewsModalWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
`
export const LoadingText = styled.h2`
font-size: 1rem;
`
export const ErrorMessage = styled.h2`
font-size: 1rem;
`
/* SEARCH.JS */
export const NewsSearchContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 6rem 0 6rem;
`
export const NewsSearchInput = styled.input`
    height: 3.25rem;
    padding: 0.75rem;
    font-size: 1.25rem;
    border-radius: 3px;
    width: 75%;
    margin: 0 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const NewsSearchSubmit = styled.button`
    height: 3.25rem;
    width: 4.75rem;
    border-radius: 3px;
    margin: 0 0.25rem;
    font-size: 1.25rem;
    cursor: pointer;
    background-color: var(--theme-secondary);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const NewsSearchAuto = styled.button`
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

export const NewsInnerContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 100%;
`
/* NEWSCONTENT.JS */
export const NewsContentWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0 0 2rem 0;
width: 100vw;
height: 100%;
position: relative;
`
export const InnerContentWrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
position: relative;
overflow-x: hidden;
width: 100%;
scroll-behavior: smooth;
padding: 0 2rem 0 2rem;
`
/* NEWSARTICLE.JS */
export const ArticleWrapper = styled.div`
display: flex;
flex-direction: column;
height: 21rem;
min-width: 24rem;
background-color: #fff;
margin: 1rem;
border-radius: 25px;
cursor: pointer;
position: relative;
transform: none;
opacity: 1;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const LinkWrapper = styled.a`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: transparent;
height: 21rem;
min-width: 24rem;
border-radius: 25px;
position: relative;
overflow: hidden;
z-index: 2;
text-decoration: none;
color: #000;
`
export const ArticleTitle = styled.h2`
font-size: 1rem;
padding: 0 0.75rem;
height: 7rem;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
`
export const ArticleImg = styled.img`
width: 24rem;
height: 14rem;
object-fit: cover;
border-radius: 25px 25px 0 0;
opacity: ${(props) => (props.opacity ? 1 : 0.5)};
`
export const ArticleImgEmpty = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 6rem;
background-color: var(--theme-secondary);
width: 24rem;
height: 14rem;
border-radius: 25px 25px 0 0;
opacity: ${(props) => (props.opacity ? 1 : 0.5)};
`
export const Arrow = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 2.5rem;
width: 2.5rem;
position: absolute;
right: ${(props) => (props.position === "right" ? "3rem" : null)};
left: ${(props) => (props.position === "left" ? "3rem" : null)};
z-index: 99;
cursor: pointer;
background-color: #fff;
border: none;
border-radius: 50%;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
opacity: 0.5;

&:hover{
    opacity: 1;
}
`



export const NoResultText = styled.h3`
font-size: 1rem;
`