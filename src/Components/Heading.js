import React from "react";

export default function Heading(props) {
  return (
    <div className="heading">
      <h3>{props.headingTitle}</h3>
      <p>Step {props.stepNum} of 3</p>
      <hr />
    </div>
  );
}
