import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Extra from "./Extra";
import Child from "./Child";
import Gardchild from "./Gardchild";
import { Container } from "react-bootstrap";
import Include from "./Include";

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route>
              <Route path="/" element={<Include />} />
              <Route path="Extra" element={<Extra />} />
              <Route path="child" element={<Child />} />
              <Route path="grand" element={<Gardchild />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
