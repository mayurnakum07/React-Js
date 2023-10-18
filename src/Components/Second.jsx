import React, { useEffect, useState } from "react";

export function Second({ words, ...props }) {
  const handalChange = (e) => {
    prompt(e);
  };

  const nCount = () => {
    props.setCount((e) => e + 1);
  };

  const uCount = () => {
    props.setCount((e) => e - 1);
  };

  return (
    <div>
      <h1>Hello, {props.word} Component</h1>
      <button
        onClick={() => handalChange("You Will make a Business man your self")}
      >
        Click on{" "}
      </button>
      <h1>Count : {props.count}</h1>
      <button className="m-2" onClick={nCount}>
        Increment
      </button>
      <button className="m-2" onClick={uCount}>
        Decrement
      </button>
      <br />
      <br />
      <Third words={words} />
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
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log(user);
    fetch("https://dummyjson.com/posts")
      .then((Response) => Response.json())
      .then((data) => setUser(data.posts));
  }, []);

  const detail1 = user.map((data) => {
    return data.title;
  });
  return (
    <div>
      <h1>Hello {props.words} Component</h1>
      <br />
      <h3>Tags: {detail1}</h3>
    </div>
  );
}
