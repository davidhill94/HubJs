import React, { useState, useEffect } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';
import './ToDoStyles.js';
import { ButtonText, TodoContainer, TodoInnerWrapper, TodoModal, ToDoTitle } from './ToDoStyles.js';

export const ToDo = ({toDoModal, handleModal, hover, open}) => {

  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //functions
  const filterHandler = () => {
    switch (filter) {
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
    if (localStorage.getItem("todos") === null) {
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
    <TodoContainer hover={hover} open={open} toDoModal={toDoModal}>
      <ButtonText toDoModal={toDoModal} hover={hover}>To Do</ButtonText>
      <TodoModal toDoModal={toDoModal}>
        <TodoInnerWrapper toDoModal={toDoModal}>
          <ToDoTitle>Things to do</ToDoTitle>
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
        </TodoInnerWrapper>
      </TodoModal>
    </TodoContainer>
  )
}
