import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Extra() {
  const [count, setCount] = useState(0);

  const increment = () => {
    count < 20 ? setCount((c) => c + 1) : alert("You can't decrement below 0");
  };
  const decrement = () => {
    count > 0 ? setCount((c) => c - 1) : alert("You can't decrement below 0");
  };
  

  return (
    <div>
      <h1>This is Extra </h1>
      <br />
      <h2 style={{color:"darkGreen", fontWeight:'bold'}}>{count}</h2>
      <Button className="m-2" onClick={increment}>
        Increment
      </Button>
      <Button className="m-2" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
}

export default Extra;
