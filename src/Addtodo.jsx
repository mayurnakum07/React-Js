import React, { useState } from "react";

function Addtodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        className="mt-5"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Addtodo;
