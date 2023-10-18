import React, { useState } from "react";
import First from "./First";
import { Second, Third } from "./Second";

export default function App3() {
  const [count, setCount] = useState(0);

  const cars = ["Ford", "BMW", "Audi", "AA", "mmm", "eee"];

  const words = {
    First: "Second",
    Second: "Third",
  };

  return (
    <div>
      <First first="Hello" name="First" car={cars} />
      <Second
        words={words.Second}
        count={count}
        setCount={setCount}
        word={words.First}
      />
    </div>
  );
}
