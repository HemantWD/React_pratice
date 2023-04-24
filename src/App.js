import React from "react";
import Button from "./Components/Button";
import Exercise10 from "./Components/Exercise10";
import Exercise11 from "./Components/Exercise11";

function App() {
  return (
    <div>
      <Button text="Increment" />
      <Button text="Decrement" />
      <Button text="Add" />
      <Exercise10 /> {/* Outputting Consitional Content */}
      <Exercise11 /> {/* Dynamic Styles */}
    </div>
  );
}

export default App;
