import react, { Fragment } from "react";
import reactDom from "react-dom";
import styles from "./Modal.module.css";

export const Backdrop = (props) => {
  return <div onClick={props.onCloseCart} className={styles.backdrop}></div>;
};

export const ModalOverLAy = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const element = document.getElementById("overlays");
  console.log(element);
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        element
      )}
      {reactDom.createPortal(
        <ModalOverLAy>{props.children}</ModalOverLAy>,
        element
      )}
    </Fragment>
  );
};

export default Modal;
