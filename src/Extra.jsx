import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

function Extra() {
  const [Count, setCount] = useState(0);
  const [UserList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((Response) => Response.json())
      .then((user) => setUserList(user.users));
  }, []);

  const Increment = () => {
    console.log("Increment numbers");
    Count < 20 ? setCount((c) => c + 1 * 2) : alert("Increment below 20");
  };

  const Derement = () => {
    console.log("Decrement");
    Count > 0 ? setCount((c) => c - 1 * 2) : alert("Decrement below 0");
  };
  
  return (
    <div>
      <h1>This is Extra </h1>
      <h1 style={{ color: "darkgreen", fontSize: "50px" }}>{Count}</h1>
      <Button className="m-3" onClick={Increment}>
        Increment
      </Button>
      <Button className="m-3" onClick={Derement}>
        Derement
      </Button>
      <br />
   
      {UserList.map((user) => (
        <h5 key={user.id}>{user.firstName}</h5>
      ))}
      {UserList.map((user) => (
        <img src={user.image} alt="" />
      ))}
    </div>
  );
}

export default Extra;
