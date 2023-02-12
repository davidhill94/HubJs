import React from 'react';
import { ToDo } from './ToDo';

export const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div>
        <ul>
            {
                filteredTodos.map((todo) => (
                    <ToDo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
                ))
            }
        </ul>
    </div>
  )
}

