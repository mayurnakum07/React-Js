import React, { useEffect, useState } from "react";
import "../App.css";
import { Button } from "react-bootstrap";

function Usestate() {
  const [input, setInput] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const addItem = (event) => {
    event.preventDefault();
    if (!text.trim()) {
      alert("Please Fill the input !!");
      return;
    }

    setInput([
      ...input,
      {
        id: input.length,
        name: text,
      },
    ]);
    setText("");
  };

  const increment = () => {
    count == input.length
      ? alert(
          "Your Above Todo list when length of todo when only when increment number."
        )
      : setCount((e) => e + 1);
  };
  const decrement = () => {
    count <= 0 ? alert("Decrement Limit 00") : setCount((e) => e - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setisSubmitting(true);
    setTimeout(() => {
      setisSubmitting(false);
      alert("Your Data is Submitted");
    }, 1000);
    console.log({ name, email, pass });
    };
    

  return (
    <div>
      <div className="App mt-3">
        <h1>UseState</h1>
        <hr className="mb-4" />
        <div
          className="container col-md-8"
          style={{
            backgroundColor: "#282c34",
            color: "white",
            padding: "40px 60px",
          }}
        >
          <h3>Todo List</h3>
          <form onSubmit={addItem}>
            <input
              name="input"
              placeholder="Type..."
              className="form-control mt-3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="d-flex justify-content-end mt-2 gap-3">
              <h4>{input.length} Todos</h4>
              <Button>Reset Todos</Button>
            </div>
            <br />
            {input.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </form>
        </div>
        <br />
        <br />
        <div
          className="container col-md-8 mt-5"
          style={{
            backgroundColor: "#282c34",
            color: "white",
            padding: "40px 60px",
          }}
        >
          <h3>Counters</h3>
          <h3 className="mt-3">{count}</h3>
          <Button className="m-3" onClick={increment}>
            Increment
          </Button>
          <Button className="m-3" onClick={decrement}>
            Decrement
          </Button>
        </div>
        <br />
        <br />
        <div
          className="container col-md-8 mt-5"
          style={{
            backgroundColor: "#282c34",
            color: "white",
            padding: "40px 60px",
          }}
        >
          <h3>Form Validaiton</h3>
          <form className="mt-3" onSubmit={handleSubmit}>
            <label className="form-label">Name : -</label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label className="form-label">Email : -</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label className="form-label">Password : -</label>
            <input
              className="form-control"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <br />
            <Button className="w-50 mb-3" type="submit">
              Sumbit
            </Button>
            <h5> {isSubmitting && "Submitting..."}</h5>
          </form>
          <br /> <br />
          <table className="table bg-light text-dark table-hover table-bordered ">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{pass}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Usestate;
