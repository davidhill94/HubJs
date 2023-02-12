import React, { useState, useEffect } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';
import './ToDoStyling.css';

export const ToDo = () => {

  //state
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

  //functions
  const filterHandler = () => {
    switch (filter){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //Local Storage
  const saveTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };

  //UseEffect
  useEffect(() => {
getTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveTodos()
  }, [todos, filter]);



  return (
    <div className='todo_container'>
    <h1>LIST</h1>
    <ToDoForm 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText} 
    inputText={inputText}
    setFilter={setFilter}
    />
    <ToDoList 
    todos={todos} 
    setTodos={setTodos}
    filteredTodos={filteredTodos}
    />
    </div>
  )
}
