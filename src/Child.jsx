import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Child({ color, setColor, generate }) {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(Count + 1);
    }, 1000);
  });
  // RGB color with alpha

  return (
    <div style={{ backgroundColor: color }}>
      <h1>This Is Child</h1>
      <br />
      <h3 style={{ backgroundColor: "black", color: "white" }} className="p-4">
        Your App BackGround Color is : {color}
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
      <Button className="m-3" onClick={generate}>
        Random Color
      </Button>
      <br />
      <br />
      <h3>This page in you Rendered {Count} Times.</h3>
    </div>
  );
}

export default Child;
