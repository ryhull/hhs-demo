import React from "react";
import Heading from "./Heading";
import FormInput from "./FormInput";

export default function FormStep2(props) {
  // Perform validation before moving on to the summary view
  function submitHandler(e) {
    e.preventDefault();
    let errorElement = document.getElementById("errorStep2");
    if (props.formData.dateOfBirth === "")
      errorElement.innerHTML = "Please add your date of birth.";
    else if (Date.parse(props.formData.dateOfBirth) > Date.now())
      errorElement.innerHTML = "Sorry, no time travellers allowed.";
    else if (props.formData.healthCardNum === "")
      errorElement.innerHTML = "Please add your health card number.";
    else if (props.formData.healthCardNum.length !== 10)
      errorElement.innerHTML = "Health card number must be 10 numbers.";
    else if (props.formData.gender === "")
      errorElement.innerHTML = "Please select your gender.";
    else {
      props.setStepTwoDisplay((prevDisplay) => !prevDisplay);
      props.setStepThreeDisplay((prevDisplay) => !prevDisplay);
    }
  }

  return (
    <form
      style={{ display: props.stepTwoDisplay ? "block" : "none" }}
      onSubmit={submitHandler}
    >
      <Heading headingTitle="New Registration" stepNum={2} />
      <FormInput
        inputType="date"
        label="Date of Birth"
        placeholder="YYYY-MM-DD"
        name="dateOfBirth"
        value={props.formData.dateOfBirth}
        formData={props.formData}
        handleChange={props.handleChange}
      />
      <FormInput
        inputType="number"
        label="Health Card Number"
        placeholder="##########"
        name="healthCardNum"
        value={props.formData.healthCardNum}
        formData={props.formData}
        handleChange={props.handleChange}
      />
      <fieldset>
        <legend>Gender</legend>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={props.formData.gender === "Male"}
            onChange={props.handleChange}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={props.formData.gender === "Female"}
            onChange={props.handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="radio"
            id="other"
            name="gender"
            value="Other"
            checked={props.formData.gender === "Other"}
            onChange={props.handleChange}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>
      <p id="errorStep2" className="input-validation-error"></p>
      <button>Next</button>
    </form>
  );
}
