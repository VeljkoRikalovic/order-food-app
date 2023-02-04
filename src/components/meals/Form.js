import React from "react";
import { useRef, useState } from "react";
import classes from "./Form.module.css";
import Input from "../ui/Input";

function Form(props) {
  const [notValid, setNotValid] = useState(true);
  const amountRef = useRef();

  const submit = (event) => {
    event.preventDefault();
    const enterdAmount = amountRef.current.value;
    const enterdAmountNumber = +enterdAmount;
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNumber < 1 ||
      enterdAmountNumber > 5
    ) {
      setNotValid(false);
      return;
    }
    props.onAddToCart(enterdAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submit}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!notValid && <p>Please enter valid amount (1-5).</p>}
    </form>
  );
}

export default Form;
