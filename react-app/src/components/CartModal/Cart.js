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
    <div className="wholeCart">
      <button onClick={() => setEditClicked(!editClicked)}>edit</button>
      {keys.map((user) => (
        <div className="cartUser">
          <p>
            {cart[user].length}
            {cart[user].length > 1 ? " items" : " item"} from {user}
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
          <div>
            <button disabled={editClicked}>Checkout</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
