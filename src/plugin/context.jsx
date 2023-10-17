import React from "react";

const Context = ({ todo, addTodo }) => {
  return (
    <>
      <button onClick={addTodo}>AddTodo</button>
    </>
  );
};

export default Context;
