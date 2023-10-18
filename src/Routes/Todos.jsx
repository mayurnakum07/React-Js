import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Tasklist } from "./Tasklist";
import Addtodo from "./Addtodo";

let nxtId = 3;
const initialTodos = [
  { id: 0, title: "Jorn Doe", done: true },
  { id: 1, title: "Sally shon", done: false },
  { id: 2, title: "Max Kajar", done: false },
];
console.log(initialTodos);

function Gardchild() {
  const [todos, setTodos] = useState(initialTodos);

  // console.log("Todos", todos);
  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: nxtId++,
        title: title,
        done: false,
      },
    ]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTodos = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };
  return (
    <>
      <Addtodo onAddTodo={handleAddTodo} />
      <Tasklist
        todos={todos}
        onChangeTodos={handleChangeTodo}
        onDeleteTodo={handleDeleteTodos}
      />{" "}
      <br /> <br />
    </>
  );
}

export default Gardchild;
