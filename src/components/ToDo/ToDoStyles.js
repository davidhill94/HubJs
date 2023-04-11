import styled from "styled-components";

/* ToDoIndex.js */
export const TodoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-primary);
    background: #0F2027;  /* fallback for old browsers */
background: ${(props) => (props.hover === "todo" || props.toDoModal & props.open ? "-webkit-linear-gradient(to right, #ff0099, #493240)" : "-webkit-linear-gradient(45deg, #2C5364, #203A43, #0F2027)")}  /* Chrome 10-25, Safari 5.1-6 */;
background: ${(props) => (props.hover === "todo" || props.toDoModal & props.open ? "linear-gradient(to right, #ff0099, #493240)" : "linear-gradient(45deg, #2C5364, #203A43, #0F2027)")}; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
`
export const TodoButton = styled.button`
font-size: 10rem;
padding: 1rem;
z-index: 1;
background-color: transparent;
border: none;
cursor: pointer;
color: lightgrey;
opacity: 0;
`


export const ButtonText = styled.h2`
position: absolute;
bottom: 5%;
right: 50%;
transform: translateX(50%);
font-size: 2rem;
opacity: ${(props) => (props.hover === "todo" ? "1" : "0")};
transition: all 0.1s ease;
`

export const TodoModal = styled.div`
display: flex;
width: 100vw;
height: 100vh;
background-color: pink;
z-index: 99;
position: absolute;
bottom: ${(props) => (props.toDoModal ? "0" : "100vh")};
right: ${(props) => (props.toDoModal ? "0" : "-100vw")};
transition: all 2s ease;
padding: 6rem;
`
export const TodoInnerWrapper = styled.div`
display: flex;
height: 100vh;
width: 100%;
`

/* ToDo.js  */
export const TodoItem = styled.li`
    color: #000;
`

export const TodoItemCompleted = styled.li`
    color: pink;
`