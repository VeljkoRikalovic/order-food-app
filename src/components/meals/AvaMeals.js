import React from "react";
import { useContext } from "react";
import classes from "./AvaMeals.module.css";
import Card from "../ui/Card";
import Form from "../meals/Form";
import CartContext from "../../store/cartcontent";
import Prikaz from "./mealitem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMeals(props) {

  const blabla = DUMMY_MEALS.map((meal) => (
    <Prikaz
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{blabla}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
