import React, {Fragment} from 'react';
import '../products.json';
import { connect } from 'react-redux';
import { removeOneFromCart } from '../modules/actions';
import { removeAllFromCart } from '../modules/actions';


const ShoppingCart = ({items, removeOneFromCart, removeAllFromCart}) => (
  <Fragment>
    <ul>
      {items.map(cart => (
        <li key={cart.id}>
          <p>{cart.title} | ${cart.price} | x{cart.quantity}</p>
          <button
            onClick={() => removeOneFromCart(cart)}
            disabled={cart.quantity ? 0 : cart.quantity}
          >{cart.quantity ? 'Remove from cart' : 'No items in cart'}</button>
          <button
            onClick={() => removeAllFromCart(cart)}
          >Remove All</button>
        </li>
      ))}
    </ul>
    {/* <p>Total: ${items.reduce((sum, product) => sum + product.price * product.quantity, 0)}</p> */}
  </Fragment>
);

export default connect (
  ({cart}) => ({
    items: Object.values(cart)
  }), {
    removeOneFromCart,
    removeAllFromCart
  })(ShoppingCart);
