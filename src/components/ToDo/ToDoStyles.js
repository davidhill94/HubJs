import styled from "styled-components";

/* ToDoIndex.js */
export const TodoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-primary);
    background: transparent;
`
export const ToDoBubble = styled.img`
width: 10rem;
height: auto;
position: absolute;

`

export const ButtonText = styled.h2`
position: absolute;
bottom: 5%;
right: 50%;
transform: translateX(50%);
font-size: 2rem;
opacity: ${(props) => (props.hover === "todo" && props.toDoModal === false ? "1" : "0")};
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