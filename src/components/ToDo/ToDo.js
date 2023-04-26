import React from 'react';
import { ToDoItem, ToDoCompleted, ToDoUncompleted, CompleteBtn, DeleteBtn, ButtonWrapper } from './ToDoStyles.js';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';

export const ToDo = ({ text, todo, todos, setTodos }) => {

    const handleDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const handleComplete = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

  return (
    <ToDoItem todo={todo}>
        {todo.completed ?
        <ToDoCompleted>{text}</ToDoCompleted>
        :
        <ToDoUncompleted>{text}</ToDoUncompleted>
    }
    <ButtonWrapper>
    <CompleteBtn onClick={handleComplete} todo={todo}><FaCheck /></CompleteBtn>
        <DeleteBtn onClick={handleDelete}><FaTrashAlt /></DeleteBtn>
    </ButtonWrapper>
    </ToDoItem>
  )
}
