import React from "react";
import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderButton from "./HeaderButton";

function Header(props){
    return <React.Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderButton onClick={props.onKlik} />
    </header>
    <div className={classes['main-image']}>
        <img src={meals} alt='food' />
    </div>

    </React.Fragment>
}

export default Header;