import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;
  if (enteredNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const formSubmmitionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameValid) {
      return;
    }

    resetName();
    resetEmail();
  };

  const nameClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";
  const emailClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmmitionHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          type="text"
          id="name"
        />
        {nameInputHasError && <p className="error-text">Name Not Valid</p>}
      </div>

      <div className={emailClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
          id="email"
        />
        {emailInputHasError && <p className="error-text">Email Not Valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
