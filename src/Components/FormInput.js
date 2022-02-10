import React from "react";

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
