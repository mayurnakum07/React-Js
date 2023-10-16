import React, { useEffect, useState } from "react";

export function Second({ para, word, ...props }) {
  // console.log("Second-Props", props);
  const handalChange = (e) => {
    prompt(e);
  };
  const nCount = () => {
    props.count >= 20
      ? alert("you are increment only below 20")
      : props.setCount((e) => e + 1);
    console.log("count", props.count);
  };

  const uCount = () => {
    props.count <= 0
      ? alert("you are Decrement only below 00")
      : props.setCount((e) => e - 1);
  };
  return (
    <div>
      <h1>
        {props.words}, {props.name} Component
      </h1>
      <button
        onClick={() => handalChange("You Will make a Business man your self")}
      >
        Click on{" "}
      </button>
      <h1>Count : {props.count}</h1>
      <Third para={para} word={word} nCount={nCount} uCount={uCount} />
    </div>
  );
}

// **********************************
// **********************************
// **********************************
// ******Component in component******
// **********************************
// **********************************
// **********************************

export function Third(props) {
  // console.log("Third-props", props);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  const eHandle = (a, b) => {
    alert(b.type);
  };

  return (
    <div>
      <button className="m-2" onClick={props.nCount}>
        Increment
      </button>
      <button className="m-2" onClick={props.uCount}>
        Decrement
      </button>
      <h1>
        {props.word}, {props.para} Component
      </h1>
      <button onClick={(e) => eHandle("", e)}>Click Now</button>
      <h2>Timer :- {time}</h2>
    </div>
  );
}
