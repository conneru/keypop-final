const ADD_TO_CART = "cart/addToCart";
const DELETE_FROM_CART = "cart/deleteFromCart";
const LOAD_CART = "cart/loadCart";
const CLEAR_CART = "cart/clearCart";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify({}));
}
let cart = localStorage.getItem("cart");
cart = JSON.parse(cart);

const addCart = (cart) => {
  return { type: ADD_TO_CART, cart };
};

const loadCart = () => {
  return { type: LOAD_CART };
};

const deleteCart = (cart) => {
  return { type: DELETE_FROM_CART, cart };
};
const cleanCart = (cart) => {
  return { type: CLEAR_CART, cart };
};

export const load = () => async (dispatch) => {
  dispatch(loadCart());
};

export const clearCart = () => async (dispatch) => {
  localStorage.setItem("cart", JSON.stringify({}));
  let cart = localStorage.getItem("cart");
  cart = JSON.parse(cart);
  dispatch(cleanCart(cart));
};

export const addToCart = (item, cart) => async (dispatch) => {
  if (!cart[item.username]) {
    cart[item.username] = [item];
  } else if (!cart[item.username].includes(item)) {
    cart[item.username].push(item);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(addCart(cart));
};

export const deleteFromCart = (item, cart) => async (dispatch) => {
  if (cart[item.username].length > 1) {
    cart[item.username] = cart[item.username].filter(
      (list) => list.id !== item.id
    );
  } else {
    delete cart[item.username];
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(deleteCart(cart));
};

const initialState = { cart: Object.assign({}, cart) };
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: Object.assign({}, action.cart) };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: Object.assign({}, action.cart),
      };
    case LOAD_CART:
      return {
        ...state,
        cart: Object.assign({}, action.cart),
      };
    case CLEAR_CART:
      console.log(cart);
      return {
        ...state,
        cart: Object.assign({}, action.cart),
      };
    default:
      return state;
  }
}
