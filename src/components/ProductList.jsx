import React from 'react';
import '../products.json';
import { connect } from 'react-redux';
//import { addToCart } from '../modules/actions';

const ProductList = ({list}) => (
  <ul>
    {list.map(product => (
      <li key={product.id}>
        <p> {product.title} | {product.price} | {product.inventory}
        </p>
      </li>
    ))}
  </ul>
);


export default connect (
  ({products}) => ({
    list: Object.values(products)
  }))(ProductList);
