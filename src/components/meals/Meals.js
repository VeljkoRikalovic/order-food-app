import { Fragment } from "react";
import MealsSummary from "./Sum";
import AvailableMeals from "./AvaMeals";


function Meals(){
    return <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
}

export default Meals;