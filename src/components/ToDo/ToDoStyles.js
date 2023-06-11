import styled, { keyframes } from "styled-components";

const delayLoad = keyframes`
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`

/* ToDoIndex.js */
export const TodoContainer = styled.div`
    width: 100%;
    min-height: 100%;
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
text-align: center;

@media screen and (max-width: 768px){
    bottom: 10%;
}
@media screen and (max-width: 525px){
    font-size: 1.5rem;
}
`

export const TodoModal = styled.div`
display: ${(props) => (props.toDoModal ? "flex" : "none")};
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: transparent;
animation-name: ${delayLoad};
animation-duration: 1s;
z-index: 99;
opacity: ${(props) => (props.toDoModal ? "1" : "0")};
transition: opacity 2s ease-in-out;
transition: all 2s ease;
overflow-y: auto;
`
export const TodoInnerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
height: 100vh;
width: 100%;
padding: 6rem;
`
export const ToDoTitle = styled.h1`
font-size: 2.25rem;
margin: 1rem;
`

/*  ToDoForm.js */
export const Form = styled.form`
display: flex;
`
export const ToDoInput = styled.input`
height: 3.25rem;
padding: 0.75rem;
font-size: 1.25rem;
border-radius: 3px;
width: 75%;
margin: 0 0.25rem;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const AddToDoBtn = styled.button`
height: 3.25rem;
width: 4.75rem;
border-radius: 3px;
margin: 0 0.25rem;
font-size: 1.25rem;
cursor: pointer;
background-color: var(--theme-secondary);
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const InputSelectWrapper = styled.div`
display: flex;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const InputSelect = styled.select`
opacity: 1;
font-size: 1.25rem;
cursor: pointer;
`
export const InputOption = styled.option`
font-size: 1.25rem;
`

/* ToDoList.js */
export const ListWrapper = styled.div`
display: flex;
padding: 2rem;
`
export const ListUl = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
list-style-type: none;
`

/* ToDo.js  */
export const ToDoItem = styled.div`
margin: 1rem;
padding: 1rem;
min-width: 14rem;
min-height: 4rem;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 25px;
background-color: ${(props) => (props.todo.completed ? "#97daa2" : "#ea6e72")};
background-size: cover;
background-repeat: no-repeat;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
export const ToDoCompleted = styled.li`
    color: #000;
    padding: 0.25rem;
`

export const ToDoUncompleted = styled.li`
    color: #000;
    padding: 0.25rem;
`
export const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const CompleteBtn = styled.button`
padding: 0.5rem;
font-size: 0.75rem;
display: flex;
align-items: center;
justify-content: center;
background-color: ${(props) => (props.todo.completed ? "green" : "white")};
border: 2px solid green;
border-radius: 50%;
cursor: pointer;
`
export const DeleteBtn = styled.button`
padding: 0.5rem;
font-size: 1rem;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
border: none;
border-radius: 50%;
cursor: pointer;
`