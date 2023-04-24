import React, { useState } from "react";

const Button = (props) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (props.text === "Increment") {
      setCount(count + 1);
    } else if (props.text === "Decrement") {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <p>
        {props.text} this {count}
      </p>
      <button onClick={handleClick}>{props.text}</button>
    </div>
  );
};

export default Button;
