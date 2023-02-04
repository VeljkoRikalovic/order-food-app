import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";
import Cart from './components/cart/Cart'
import CartProvider from './store/cartprovider'

function App() {

  const [cartShow, setCartShow] = useState(false)

  function ShowCart(){
    setCartShow(true)
  };

  function CloseCart(){
    setCartShow(false)
  };


  return (
   <CartProvider>
   {cartShow && <Cart onClose={CloseCart} />}
    <Header onKlik={ShowCart} />
    <main>
      <Meals />
    </main>
  </CartProvider>
  );
}

export default App;
