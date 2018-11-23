import React, {Fragment} from 'react';
import '../products.json';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const ProductList = ({items, addToCart}) => (
  <Fragment>
    <div className="m-auto">
      <h1 className="h1 text-center mt-5">PRODUCTS LIST</h1>
      <ul className="mt-5">
        {items.map(product => (
          <li key={product.id} style={{"listStyleType": "none"}} className="my-4">
            <h2 className="h2 text-center"> {product.title} | {product.price} | {product.inventory}
            </h2>
            <button className="btn btn-lg btn-primary col-md-2 offset-md-5" onClick={() => addToCart(product)}
              disabled={product.inventory ? 0 : product.inventory}
              >
             {product.inventory ? 'Add to cart' : 'Sold out'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </Fragment>
);

export default connect (
  ({products}) => ({
    items: Object.values(products)
  }), {
    addToCart
  })(ProductList);
