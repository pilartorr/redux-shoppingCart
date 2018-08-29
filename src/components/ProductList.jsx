import React, {Fragment} from 'react';
import '../products.json';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const ProductList = ({items, addToCart}) => (
  <Fragment>
  <ul>
    {items.map(product => (
      <li key={product.id}>
        <p> {product.title} | {product.price} | {product.inventory}
        </p>
        <button onClick={() => addToCart(product)}
          disabled={product.inventory ? 0 : product.inventory}
          >
         {product.inventory ? 'Add to cart' : 'Sold out'}
         </button>
      </li>
    ))}
  </ul>
  </Fragment>
);

export default connect (
  ({products}) => ({
    items: Object.values(products)
  }), {
    addToCart
  })(ProductList);
