import React from "react";

function First(props) {
  const handleClick = () => {
    alert(`You Are  ${props.name} Component Learn `);
  };

  const car = props.car;

  return (
    <div>
      <h1>
        {props.first}, {props.name} Component
      </h1>

      <h2>You Have {car.length} cars. </h2>
      {car.length > 3 ? (
        <h3> You are midd people</h3>
      ) : (
        <h3>You are Reach people</h3>
      )}
      <button onClick={handleClick}>CLick Now</button>
      <br />
      <br />
    </div>
  );
}

export default First;
