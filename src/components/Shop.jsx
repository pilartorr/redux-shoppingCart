import React, {Component, Fragment} from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

class Shop extends Component {

  render(){
    return (
      <Fragment>
        <ProductList />
        <ShoppingCart />
      </Fragment>
    );
  }
}

export default Shop;
