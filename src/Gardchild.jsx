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

const cteateInitialTools = () => {
  const initialValue = [];
  for (let i = 0; i < 50; i++) {
    initialValue.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialValue;
};

function Gardchild() {
  const [todos, setTodos] = useState(initialTodos);
  const [tools, setTools] = useState(cteateInitialTools);
  console.log('tools',tools);
  const [text, setText] = useState("");
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
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Button
        className="m-3"
        onClick={() => {
          setText("");
          setTools([
            {
              id: todos.length,
              text: text,
            },
            ...tools,
          ]);
        }}
      >
        Add
      </Button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}

export default Gardchild;
