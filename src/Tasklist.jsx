import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export function Tasklist({ todos, onChangeTodos, onDeleteTodo }) {

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          <li key={todo.id}>
            <Task
              todo={todo}
              onChange={onChangeTodos}
              onDelete={onDeleteTodo}
            />
          </li>;
        })}
      </ul>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Task
              todo={todo}
              onChange={onChangeTodos}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [Edit, setEdit] = useState(false);
  let todoContent;
  if (Edit) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <Button className="m-3" onClick={() => setEdit(false)}>
          Save
        </Button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <Button className="m-3" onClick={() => setEdit(true)}>
          Edit
        </Button>
      </>
    );
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({
              ...todo,
              done: e.target.checked,
            });
          }}
        />
        {todoContent}
        <Button className="m-3" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </label>
    </div>
  );
}
