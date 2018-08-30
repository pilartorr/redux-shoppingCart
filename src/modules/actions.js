export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product
  }
}

export function removeOneFromCart(product) {
  return {
    type: 'REMOVE_ONE_FROM_CART',
    product
  }
}

export function removeAllFromCart(product) {
  return {
    type: 'REMOVE_ALL_FROM_CART',
    product
  }
}

export function checkout() {
  return {
    type: 'CHECKOUT',
  }
}
