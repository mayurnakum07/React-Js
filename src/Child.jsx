import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Child() {
  const [Color, setColor] = useState("");
  const [Count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((e) => e + 1);
    }, 1000);
  });
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
  ]; // RGB color with alpha

  const randomGenerate = (event) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    console.log("randomIndex", randomIndex);
    const randomColor = colors[randomIndex];
    console.log("randomColor", randomColor);
    setColor(randomColor);
  };
  return (
    <div style={{ backgroundColor: `${Color}` }}>
      <h1>This Is Child</h1>
      <br />
      <h3 style={{ backgroundColor: "black", color: "white" }} className="p-4">
        Your App BackGround Color is : {Color}
      </h3>
      <Button className="m-3" onClick={() => setColor("green")}>
        Click And Green
      </Button>
      <Button className="m-3" onClick={() => setColor("yellow")}>
        Click And Yellow
      </Button>
      <Button className="m-3" onClick={() => setColor("skyBlue")}>
        Click And SkyBlue
      </Button>
      <Button className="m-3" onClick={randomGenerate}>
        Random Color
      </Button>
      <br />
      <br />
      <h3>This page in you Rendered {Count} Times.</h3>
    </div>
  );
}

export default Child;
