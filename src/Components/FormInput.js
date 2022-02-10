import React from "react";

// This component includes a label and its associated input element

export default function FormInput(props) {
  return (
    <div className="form-input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        name={props.name}
        value={props.state}
        onChange={props.handleChange}
      />
    </div>
  );
}
