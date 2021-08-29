import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingPreview from "../ListingPreview";
import "./Cart.css";
import { deleteFromCart, load } from "../../store/cart";

const Cart = () => {
  const [editClicked, setEditClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(load());
  }, [dispatch]);
  let cart = useSelector((state) => state.cartReducer.cart);
  const keys = Object.keys(cart);
  const values = Object.values(cart);
  console.log(values);
  return (
    <div>
      <button onClick={() => setEditClicked(!editClicked)}>edit</button>
      {/* {cart.length ? (
        cart.map((item) => (
          <div>
            {editClicked ? (
              <img
                onClick={() => dispatch(deleteFromCart(item))}
                className="deleteIcon"
                alt="delete"
                src="https://flyclipart.com/thumb2/bin-cancel-circle-delete-garbage-remove-trash-icon-695065.png"
              ></img>
            ) : null}
            <ListingPreview listing={item} />
          </div>
        ))
      ) : (
        <div>Cart is currently empty</div>
      )} */}
      {keys.map((user) => (
        <div className="cartUser">
          <p>
            {cart[user].length} items from {user}
          </p>
          {cart[user].map((listing) => (
            <div>
              {editClicked ? (
                <button onClick={() => dispatch(deleteFromCart(listing))}>
                  delete
                </button>
              ) : null}
              <ListingPreview listing={listing} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cart;
