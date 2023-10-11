import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Gardchild() {
  const [Count, setCount] = useState(0);
  const [IsEven, setIsEven] = useState(true);
  const Increment = () => {
    console.log("Increment numbers");
    setCount((c) => c + 1);
    setIsEven((Count + 1) % 2 === 0);
  };
  const Derement = () => {
    console.log("Decrement");
    Count > 0 ? setCount((c) => c - 1) : alert("Decrement below 0");
    setIsEven((Count - 1) % 2 === 0);
  };
  return (
    <>
      <h1>This Is Grand-Child</h1>
      <h1 style={{ color: "darkgreen", fontSize: "50px" }}>
        Counter : {Count}
      </h1>
      <h3>{ IsEven ? 'Even' : 'Odd' }</h3>
      <Button className="m-3" onClick={Increment}>
        Increment
      </Button>
      <Button className="m-3" onClick={Derement}>
        Derement
      </Button>
    </>
  );
}

export default Gardchild;
