import React, {Component, Fragment} from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

class Shop extends Component {

  render(){
    return (
      <Fragment>
        <div className="container w-100">
          <ProductList  />
          <ShoppingCart />
        </div>
      </Fragment>
    );
  }
}

export default Shop;
