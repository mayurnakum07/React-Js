import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Extra from "./Extra";
import Child from "./Child";
import Gardchild from "./Gardchild";
import { Button, Container } from "react-bootstrap";
import Include from "./Include";
function App() {
  const [Color, setColor] = useState("");
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  const randomGenerate = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    const randomColor = colors[randomIndex];
    setColor(randomColor);
    console.log(randomColor);
  };

  return (
    <div className="App">
      <Container className="mt-5">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route>
              <Route path="/" element={<Include />} />
              <Route path="Extra" element={<Extra />} />
              <Route
                path="child"
                element={
                  <Child
                    color={Color}
                    setColor={setColor}
                    generate={randomGenerate}
                  />
                }
              />
              <Route path="grand" element={<Gardchild />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
