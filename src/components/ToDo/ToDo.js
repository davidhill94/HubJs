import React from 'react';
import './ToDoStyling.css';

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
        <li className={`todo_item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
