import React from "react";
import TodoItem from "./TodoItem";

// import { useState } from "react";
function ToDoList({ todos, toggleTodo, deleteTodo }) {
  //   const [todos, setTodos] = useState([]);

  return (
    <ul className="list">
      {todos.length === 0 && "No todos, Please add one "}
      {todos.map((todo) => {
        return (
          //   <TodoItem
          //     id={todo.id}
          //     completed={todo.completed}
          //     title={todo.title}
          //     key={todo.id}
          //   /> these props can be passed in another way coded below
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;
