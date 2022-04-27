import react, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cancelHandler = () => {
    setIsCheckout(false);
  };

  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    );
  });

  const modalActions = (
    <div className={styles.actions}>
      <button onClick={props.onCloseCart} className={styles["button--alt"]}>
        close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={styles["button"]}>
          order
        </button>
      )}
    </div>
  );

  console.log(isCheckout);
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <CheckOut onCancel={cancelHandler} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
