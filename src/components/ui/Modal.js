import React from "react";
import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const element = document.getElementById('overlays')

function Modal(props){
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, element)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, element)}
    </Fragment>
}

export default Modal;
