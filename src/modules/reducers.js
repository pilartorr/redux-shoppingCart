function deleteFromCart(id, cart){
  const newCart = {...cart};
  delete newCart[id];
  return newCart;
};


// function to export the states and the actions of the differents item of the list
export function appReducer(state = {}, action) {

  const {products, cart} = state;

// this imports the arguments from the actions
  const {product} = action || {};
  const {id, title, price} = product || {};
  let inventory, quantity;


  switch (action.type) {

    case 'ADD_TO_CART':
      inventory = products[id].inventory;
      quantity = cart[id] ? cart[id].quantity : 0 ;

        if(inventory <= 0) return state;

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
          },

          cart: {
              ...cart,

              [id]: {
                id: id,
                title: title,
                price: price,
                quantity: quantity + 1
              }
          }
        }

    case 'REMOVE_ONE_FROM_CART':

      quantity = cart[id].quantity;
      inventory = products[id].inventory;

       if(quantity <= 0) return state;

        return {
          ...state,

          products: {
              ...products,

              [id]: {
                id: id,
                title: title,
                price: price,
                inventory: inventory + 1
              }
          },

         cart: quantity <= 1 ? deleteFromCart(id, cart): {
            ...cart,

            [id]: {
              id: id,
              title: title,
              price: price,
              quantity: quantity - 1
            }
          }
        }

    case 'REMOVE_ALL_FROM_CART':

        quantity = cart[id].quantity;
        inventory = products[id].inventory;

        if(quantity <= 0) return state;

          return {
            ...state,

            products: {
                ...products,

                [id]: {
                  id: id,
                  title: title,
                  price: price,
                  inventory: inventory + quantity
                }
            },

            cart: deleteFromCart(id, cart)
          }

    default:
      return state;
  }
}
