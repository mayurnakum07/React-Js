import React from "react";
import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Herder from "./Herder";
import Usestate from "./Usestate";
import UseEffect from "./UseEffect";
import Detail from "./Detail";
import { useDarkMode } from "./Usecontext";
import Usereducer from "./Usereducer";
export default function App() {
  const { isDarkMode } = useDarkMode();

  // use;
  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* <Usecontext> */}
      <BrowserRouter>
        <Herder />
        <Routes>
          <Route path="/" element={<Usestate />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/details" element={<Detail />} />
          <Route path="/usecontext" element={<Usereducer />} />
        </Routes>
      </BrowserRouter>
      {/* </Usecontext> */}
    </div>
  );
}
