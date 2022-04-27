import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const checkData = (name, age) => {
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        info: "please enter a valid Input, not empty",
      });
      return false;
    }
    if (+age <= 0) {
      setError({
        title: "Invalid Age",
        info: "please enter a valid age (>0)",
      });
      return false;
    }
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const inputName = nameInputRef.current.value;
    const inputAge = ageInputRef.current.value;

    if (checkData(inputName, inputAge)) {
      props.onUserAdd(inputName, inputAge);
    }
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          info={error.info}
          onClick={() => {
            setError(null);
          }}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler} action="">
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit" onClick={submitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
