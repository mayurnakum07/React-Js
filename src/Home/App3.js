import React, { useState } from "react";
import First from "./First";
import { Second, Third } from "./Second";

export default function App3() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("yellow");
  const name = "React's";
  const fun = "Functional";
  const para = "I'm Child";
  const cars = ["Ford", "BMW", "Audi", "AA", "mmm", "eee"];
  const words = {
    First: "Hello",
    Second: "Hyyy",
  };
  return (
    <div>
      <button
        onClick={() => setColor("tan")}
        style={{ backgroundColor:color }}
      >
        Click 
      </button>
      <First first="Hello" name={name} car={cars} />
      <Second
        words={words.Second}
        name={fun}  
        count={count}
        setCount={setCount}
        para={para}
        word={words.First}
      />
    </div>
  );
}
