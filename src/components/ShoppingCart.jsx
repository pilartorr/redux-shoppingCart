import React, {Fragment} from 'react';
import '../products.json';
import { connect } from 'react-redux';
import { removeOneFromCart } from '../modules/actions';
import { removeAllFromCart } from '../modules/actions';
import { checkout } from '../modules/actions';

// function checkout(items){
//   items.map(function(cart){
//     return items;
//   }
// )};


const ShoppingCart = ({items, removeOneFromCart, removeAllFromCart, checkout}) => (
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
    <p>Your total is: ${items.reduce((sum, product) => sum + product.price * product.quantity, 0)}</p>
    <button onClick={checkout}>Checkout</button>

    {/* <button onClick={items.map(cart => checkout(cart))}>Checkout</button> */}



  </Fragment>
);

export default connect (
  ({cart}) => ({
    items: Object.values(cart)
  }), {
    removeOneFromCart,
    removeAllFromCart,
    checkout
  })(ShoppingCart);
