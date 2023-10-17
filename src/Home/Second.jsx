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
      <br />
      <br />
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
  const [user, setUser] = useState([]);
  console.log(user);

  const eHandle = (a, b) => {
    alert(b.type);
  };
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((Response) => Response.json())
      .then((data) => setUser(data.users));
  }, []);

  const detail1 = user.map((data) => {
    return data.phone;
  });
  console.log("detail1", detail1);
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
      <h3>{ detail1}</h3>
    </div>
  );
}
