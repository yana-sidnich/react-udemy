import styles from "./CheckOut.module.css";
import react, { useRef } from "react";

const isEmpty = (value) => {
  return value.trim() === "";
};
const isTooShort = (value) => {
  return value.trim().length !== 5;
};

const Checkout = (props) => {
  const nameINputReaf = useRef();
  const streetINputReaf = useRef();
  const postalINputReaf = useRef();
  const cityINputReaf = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameINputReaf.current.value;
    const enteredStreet = streetINputReaf.current.value;
    const enteredPostal = postalINputReaf.current.value;
    const enteredCity = cityINputReaf.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isTooShort(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameINputReaf} type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetINputReaf} type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalINputReaf} type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input ref={cityINputReaf} type="text" id="city" />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
