import React from 'react';
import '../products.json';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const ProductList = ({items, addToCart}) => (
  <ul>
    {items.map(product => (
      <li key={product.id}>
        <p> {product.title} | {product.price} | {product.inventory}
        </p>
        <button onClick={() => addToCart(product)}>
        Add to Cart
         </button>
      </li>
    ))}
  </ul>
);

export default connect (
  ({products}) => ({
    items: Object.values(products)
  }), {
    addToCart
  })(ProductList);
