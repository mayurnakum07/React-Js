import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Extra from "./Extra";
import Child from "./Child";
import Gardchild from "./Gardchild";
import { Container } from "react-bootstrap";

function App() {
  const [name, setName] = useState({});
  const [area, setArea] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores officia incidunt eos laudantium labore! Esse reiciendis sed illum inventore pariatur maxime non debitis ad ex cupiditate, quasi, deleniti fugit repellat!"
  );
  const [select, setSelect] = useState("Volvo");

  const names = [
    { id: 1, name: "jorn Doe" },
    { id: 2, name: "sara Shon" },
    { id: 3, name: "sally velion" },
  ];
  const filterList = names.filter((ele3) => ele3.name.includes("jorn Doe"));
  const filtered = filterList.map((ele4) => <li key={ele4.id}>{ele4.name}</li>);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setName((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log("name", name);
    event.preventDefault();
    alert(
      `The name you entered has : ${name.name} and your age is : ${name.age}`
    );
  };

  const nhandle = (event) => {
    setArea(event.target.value);
    console.log("textInput", area);
  };

  const sHandle = (event) => {
    setSelect(event.target.value);
    console.log("Select", select);
  };
  return (
    <div className="App">
      <Container className="mt-5">
        <BrowserRouter>
      <Header />
          <Routes>
            <Route>
              <Route path="/" element={<Extra />} />
              <Route path="child" element={<Child />} />
              <Route path="grand" element={<Gardchild />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>

      <h3 className="mt-5">{filtered}</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Name:
          <input
            type="text"
            name="name"
            value={name.userName}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter Your Age:
          <input
            type="number"
            name="age"
            value={name.age || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button> <br /> <br />
        <label>
          Text-area
          <textarea
            name="text"
            value={area}
            id=""
            cols="30"
            rows="3"
            onChange={nhandle}
          ></textarea>
        </label>
        <br /> <br />
        <label>
          Select Favorite Car
          <select name="select" value={select} onChange={sHandle}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Supra">Supra</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default App;
