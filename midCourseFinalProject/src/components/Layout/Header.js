import react from "react";
import styles from "./Header.module.css";
import img from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartBUtton";

const Header = (props) => {
  return (
    <react.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={img} alt="A lot of foooodddd" />
      </div>
    </react.Fragment>
  );
};

export default Header;
