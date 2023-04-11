import React from 'react';
import { TodoItem, TodoItemCompleted } from './ToDoStyles.js';

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
    <div>
        {todo.completed ?
        <TodoItemCompleted>{text}</TodoItemCompleted>
        :
        <TodoItem>{text}</TodoItem>
    }
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
