import React, {Fragment} from 'react';
import '../products.json';
import { connect } from 'react-redux';
import { removeOneFromCart } from '../modules/actions';
import { removeAllFromCart } from '../modules/actions';
import { checkout } from '../modules/actions';

const ShoppingCart = ({items, removeOneFromCart, removeAllFromCart, checkout}) => (
  <Fragment>
      <div className="m-auto">
        <h1 className="h1 text-center mt-5">SHOPPING CART</h1>
        <ul className="m-auto">
          {items.map(cart => (
            <li key={cart.id} style={{"listStyleType": "none"}} className="mt-5">
              <h2 className="h2 text-center">{cart.title} | ${cart.price} | x{cart.quantity}</h2>
              <button className ="btn btn-danger btn-lg my-3 mr-3 col-md-2 offset-md-5"
                onClick={() => removeOneFromCart(cart)}
                disabled={cart.quantity ? 0 : cart.quantity}
              >{cart.quantity ? 'Remove one' : 'No items in cart'}</button>
              <button className ="btn btn-danger btn-lg my-3 col-md-2 offset-md-5"
                onClick={() => removeAllFromCart(cart)}
              >Remove All</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-auto">
        <h2 className="h2 text-center">Your total is: ${items.reduce((sum, product) => sum + product.price * product.quantity, 0)}</h2>
        <button className="btn btn-success btn-lg col-md-2 offset-md-5" onClick={checkout}>Checkout</button>
      </div>

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
