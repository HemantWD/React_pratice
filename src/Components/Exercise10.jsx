import React, { useState } from "react";
import "./Exercise.css";
const Exercise10 = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  function proceedHandler() {
    setIsDeleting(false);
  }
  function deleteHandler() {
    setIsDeleting(true);
  }
  let warning;
  if (isDeleting) {
    warning = (
      <div>
        <h2>Are you Sure</h2>
        <p>These Changes are not revertiable</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>
    );
  }
  return (
    <>
      <div>
        {warning}
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </>
  );
};

export default Exercise10;
