import React from "react";
import HeaderIcon from "../cart/Icons.js";
import classes from "./HeaderButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cartcontent.js";


function HeaderButton(props) {

  const cartCtx = useContext(CartContext);
  
  const broj = cartCtx.items.reduce((trenutniBroj, item)=>{
    return trenutniBroj + item.amount;
  }, 0) 

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <HeaderIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{broj}</span>
    </button>
  );
}

export default HeaderButton;
