import React from 'react';
import { ToDo } from './ToDo';
import { ListUl, ListWrapper } from './ToDoStyles';

export const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <ListWrapper>
        <ListUl>
            {
                filteredTodos.map((todo) => (
                    <ToDo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
                ))
            }
        </ListUl>
    </ListWrapper>
  )
}

