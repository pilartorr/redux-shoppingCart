
// function to export the states and the actions of the differents item of the list
export function appReducer(state = {}, action) {

  const {products, cart} = state;
  const {product} = action;

  switch (action.type) {
    case 'ADD_TO_CART':

    const {id, title, price, inventory} = product;

    return {
      ...state,

      products: {
          ...products,

          [id]: {
            id: id,
            title: title,
            price: price,
            inventory: inventory - 1
          }
      }
    }
    default:
      return state;
  }
}
