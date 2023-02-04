import classes from './AvaMeals.module.css'
import Form from './Form';
import CartContext from '../../store/cartcontent';
import { useContext } from 'react';

function Prikaz(props) {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`

    const addToCart = (amount) => {
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
        });
      };

    return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <Form onAddToCart={addToCart} />
        </div>
      </li>
    );
  }

  export default Prikaz;