import React from "react";

function First(props) {
  // console.log('First-props', props);
  const handleClick = () => {
    alert(`  You Are ${props.name} Learnig`);
  };
  const car = props.car;
  return (
    <div>
      <h1>
        {props.first}, {props.name} Component
      </h1>

      {car.length > 0 && <h2>You Have {car.length} cars. </h2>}
      {car.length < 3 ? (
        <h3> You are midd people</h3>
      ) : (
        <h3>You are Reach people</h3>
      )}
      <button onClick={handleClick}>CLick Now</button>
    </div>
  );
}

export default First;
