export function addToCart() {
  return {
    type: 'ADD_TO_CART',
    
  }
}

export function removeOneFromCart(productFromCart) {
  return {
    type: 'REMOVE_ONE_FROM_CART',
    productFromCart
  }
}

export function removeAllFromCart(productFromCart) {
  return {
    type: 'REMOVE_ALL_FROM_CART',
    productFromCart
  }
}
