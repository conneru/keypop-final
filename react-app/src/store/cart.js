const ADD_TO_CART = "cart/addToCart";
const DELETE_FROM_CART = "cart/deleteFromCart";
const LOAD_CART = "cart/loadCart";

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

const deleteCart = (item) => {
  return { type: DELETE_FROM_CART, item };
};

export const load = () => async (dispatch) => {
  dispatch(loadCart());
};

export const addToCart = (item) => async (dispatch) => {
  if (!cart[item.username]) {
    cart[item.username] = [item];
  } else if (!cart[item.username].includes(item)) {
    cart[item.username].push(item);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(addCart(item));
};

export const deleteFromCart = (item) => async (dispatch) => {
  if (cart[item.username].length > 1) {
    console.log("i hit the right one");
    cart[item.username] = cart[item.username].filter(
      (list) => list.id !== item.id
    );
  } else {
    console.log("heehe i hit this one");
    delete cart[item.username];
  }
  console.log("what thehell");
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch(deleteCart(item));
};

const initialState = { cart: Object.assign({}, cart) };
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: Object.assign({}, cart) };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: Object.assign({}, cart),
      };
    case LOAD_CART:
      return {
        ...state,
        cart: Object.assign({}, cart),
      };
    default:
      return state;
  }
}
