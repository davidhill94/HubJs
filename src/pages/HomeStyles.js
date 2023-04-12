import styled from "styled-components";
import background from '../images/background.png';
import background2 from '../images/background2.png';
import background3 from '../images/background3.png';

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-image: url(${background3});
    background-size: cover;
    background-repeat: no-repeat;
  `

export const TopLeft = styled.div`
  width: ${(props) => (!props.newsModal & props.open ? "0vw" : props.newsModal & props.open ? "100vw" : "50vw")};
  height: ${(props) => (!props.newsModal & props.open ? "0vh" : props.newsModal & props.open ? "100vh" : "50vh")};
  transition: all 1s ease;
  position: absolute;
  top:0;
  left: 0;
  `
export const TopRight = styled.div`
  width: ${(props) => (!props.toDoModal & props.open ? "0vw" : props.toDoModal & props.open ? "100vw" : "50vw")};
  height: ${(props) => (!props.toDoModal & props.open ? "0vh" : props.toDoModal & props.open ? "100vh" : "50vh")};
  transition: all 1s ease;
  position: absolute;
  top:0;
  right: 0;
  `
export const BottomLeft = styled.div`
    width: ${(props) => (!props.weatherModal & props.open ? "0vw" : props.weatherModal & props.open ? "100vw" : "50vw")};
    height: ${(props) => (!props.weatherModal & props.open ? "0vh" : props.weatherModal & props.open ? "100vh" : "50vh")};
    transition: all 1s ease;
    position: absolute;
    bottom: 0;
    left: 0;
  `
export const BottomRight = styled.div`
  width: ${(props) => (!props.practiceModal & props.open ? "0vw" : props.practiceModal & props.open ? "100vw" : "50vw")};
  height: ${(props) => (!props.practiceModal & props.open ? "0vh" : props.practiceModal & props.open ? "100vh" : "50vh")};
    transition: all 1s ease;
    position: absolute;
    bottom: 0;
    right: 0;

  `
export const CenterDiv = styled.div`
    width: 25%;
    height: 25%;
    background-color: transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: ${(props) => (props.open ? "0" : "1")};
    transition: 0.5s ease;
  `
