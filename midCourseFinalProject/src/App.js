import react, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [openCart, openCartState] = useState(false);
  const showCartHandler = () => {
    console.log("heyy");
    openCartState(true);
  };

  const hideCartHandler = () => {
    console.log("heyy2");
    openCartState(false);
  };

  return (
    <CartProvider>
      {openCart && <Cart onCloseCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
