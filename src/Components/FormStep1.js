import React from "react";
import Heading from "./Heading";
import FormInput from "./FormInput";

export default function FormStep1(props) {
  // On submit, do validation, and if inputs are valid, move to the next step
  function submitHandler(e) {
    e.preventDefault();
    let errorElement = document.getElementById("errorStep1");
    if (props.formData.firstName === "")
      errorElement.innerHTML = "Please enter your first name.";
    else if (props.formData.lastName === "")
      errorElement.innerHTML = "Please enter your last name.";
    else {
      props.setStepOneDisplay((prevDisplay) => !prevDisplay);
      props.setStepTwoDisplay((prevDisplay) => !prevDisplay);
    }
  }

  return (
    <form
      style={{ display: props.stepOneDisplay ? "block" : "none" }}
      onSubmit={submitHandler}
    >
      <Heading headingTitle="New Registration" stepNum={1} />
      <p>
        Please fill out this form to register an account with us. Once complete,
        you will receive confirmation and will be sent back to the home page.
      </p>
      <FormInput
        inputType="text"
        label="First Name"
        placeholder="Enter your first name here..."
        name="firstName"
        value={props.formData.firstName}
        formData={props.formData}
        handleChange={props.handleChange}
      />
      <FormInput
        inputType="text"
        label="Last Name"
        placeholder="Enter your last name here..."
        name="lastName"
        value={props.formData.lastName}
        formData={props.formData}
        handleChange={props.handleChange}
      />
      <p id="errorStep1" className="input-validation-error"></p>
      <button>Next</button>
    </form>
  );
}
