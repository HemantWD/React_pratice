import React, { useState } from "react";
import "./Exercise.css";

const Exercise11 = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h1 style={{ color: toggle ? "red" : "white" }}>Style me!</h1>
      <button onClick={toggleHandler}>Toggle style</button>
    </div>
  );
};

export default Exercise11;
