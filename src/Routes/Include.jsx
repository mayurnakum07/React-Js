import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Include() {
  const [Text, setText] = useState("Hello");
  const [Check, setCheck] = useState(true);
  const [Name, setName] = useState("Jorn");
  const [Age, setAge] = useState(18);
  const [Number, setNumber] = useState(12);
  const [form, setForm] = useState({
    firstName: "Jorn",
    lastName: "Doe",
    email: "jorn12@gmail.com",
    img: "https://files.superworks.com/profileImages/iBr41Pc9u2.jpeg",
  });
  const inputChange = (e) => {
    setText(e.target.value);
  };

  const chenkChange = (e) => {
    setCheck(e.target.checked);
  };
  const nNumber = (n) => {
    setNumber((n) => n + 1);
  };

  return (
    <div className="mt-5">
      <Form.Control type="text" value={Text} onChange={inputChange} />
      <h3>You Typed is : {Text} </h3>
      <Button onClick={() => setText("hello")}>Reset</Button> <br /> <br />
      <label>
        <input type="checkbox" checked={Check} onChange={chenkChange} />
        Check This Box
      </label>
      <h3>You {Check ? "Check" : "UnCheck"} Box</h3>
      <br />
      <Form.Control
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button className="m-3" onClick={() => setAge(Age + 1)}>
        Increment
      </Button>
      <h3>
        Hello {Name} . Your Age is {Age}
      </h3>
      <br />
      <br />
      <h3>Your Num. : {Number}</h3>
      <Button
        className="m-3"
        onClick={() => {
          nNumber();
          nNumber();
          nNumber();
        }}
      >
        +3
      </Button>
      <Button className="m-3" onClick={() => nNumber()}>
        +1
      </Button>
      <br />
      <br />
      <label>First Name :</label>{" "}
      <input
        type="text"
        value={form.firstName}
        onChange={(e) => {
          setForm({
            ...form,
            firstName: e.target.value,
          });
        }}
      />{" "}
      <br /> <br />
      <label>Last Name :</label>{" "}
      <input
        type="text"
        value={form.lastName}
        onChange={(e) => {
          setForm({
            ...form,
            lastName: e.target.value,
          });
        }}
      />{" "}
      <br /> <br />
      <label>Email :</label>{" "}
      <input
        type="email"
        value={form.email}
        onChange={(e) => {
          setForm({
            ...form,
            email: e.target.value,
          });
        }}
      />{" "}
      <br /> <br />
      <label>Img : </label>
      <input
        type="text"
        value={form.img}
        onChange={(e) => {
          setForm({
            ...form,
            img: e.target.value,
          });
        }}
      />
      <h3>
        First Name : {form.firstName}
        <br />
        Last Name : {form.lastName} <br />
        Email : {form.email}
        <br />
        Img : <img src={form.img} alt="" />
      </h3>
      <br />
    </div>
  );
}

export default Include;
