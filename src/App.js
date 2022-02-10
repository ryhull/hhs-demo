import React from "react";
import FormStep1 from "./Components/FormStep1";
import FormStep2 from "./Components/FormStep2";
import Summary from "./Components/Summary";

import "./styles.css";

// This to hold the state of the form elements, so that their data can be passed to the last form

export default function App() {
  const [formData, setFormData] = React.useState({
    firstName: "Bob",
    lastName: "Dole",
    dateOfBirth: "1994-06-23",
    healthCardNum: "1234567891",
    gender: "Male"
  });

  const [stepOneDisplay, setStepOneDisplay] = React.useState(true);
  const [stepTwoDisplay, setStepTwoDisplay] = React.useState(false);
  const [stepThreeDisplay, setStepThreeDisplay] = React.useState(false);

  // Function for adding new values of form date upon state change
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      };
    });
  }

  console.log(formData);

  return (
    <div className="App">
      <FormStep1
        formData={formData}
        handleChange={handleChange}
        stepOneDisplay={stepOneDisplay}
        setStepOneDisplay={setStepOneDisplay}
        setStepTwoDisplay={setStepTwoDisplay}
      />
      <FormStep2
        formData={formData}
        handleChange={handleChange}
        setStepOneDisplay={setStepOneDisplay}
        stepTwoDisplay={stepTwoDisplay}
        setStepTwoDisplay={setStepTwoDisplay}
        setStepThreeDisplay={setStepThreeDisplay}
      />
      <Summary
        formData={formData}
        setStepTwoDisplay={setStepTwoDisplay}
        stepThreeDisplay={stepThreeDisplay}
        setStepThreeDisplay={setStepThreeDisplay}
      />
    </div>
  );
}
