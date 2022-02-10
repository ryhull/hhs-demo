import React from "react";
import Heading from "./Heading";

export default function (props) {
  function submitHandler(e) {
    e.preventDefault();
    // Form data would be sent off to the server in this function
  }

  return (
    <div style={{ display: props.stepThreeDisplay ? "block" : "none" }}>
      <Heading headingTitle="Confirm Registration" stepNum={3} />
      <p>
        Please look over the fields below and verify that all of your data is
        correct. When ready, click the submit button.
      </p>
      <table className="summary-table">
        <tbody>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
          <tr>
            <td>First Name</td>
            <td>{props.formData.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{props.formData.lastName}</td>
          </tr>
          <tr>
            <td>Birth Date</td>
            <td>{props.formData.dateOfBirth}</td>
          </tr>
          <tr>
            <td>Health Card</td>
            <td>{props.formData.healthCardNum}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{props.formData.gender}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={submitHandler}>Submit Data</button>
    </div>
  );
}
