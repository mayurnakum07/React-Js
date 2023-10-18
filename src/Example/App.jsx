import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Herder from "./Herder";
import Usestate from "./Usestate";
import UseEffect from "./UseEffect";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Herder />
        <Routes>
          <Route path="/" element={<Usestate />} />
          <Route path="/useeffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
