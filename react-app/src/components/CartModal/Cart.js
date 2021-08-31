import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListingPreview from "../ListingPreview";
import "./Cart.css";
import { deleteFromCart, load } from "../../store/cart";

const Cart = () => {
  const [editClicked, setEditClicked] = useState(false);
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cartReducer.cart);
  const keys = Object.keys(cart);

  function sellItems(user) {
    for (let item of cart[user]) {
      console.log(item);
    }
  }

  return (
    <div className="wholeCart">
      {keys?.length !== 0 ? (
        <span onClick={() => setEditClicked(!editClicked)} className="edit">
          edit
        </span>
      ) : null}
      {keys?.map((user) => (
        <div className="cartUser">
          <p>
            {cart[user]?.length}
            {cart[user]?.length > 1 ? " items" : " item"} from {user}
          </p>
          {cart[user]?.map((listing) => (
            <div className="userItems">
              {editClicked ? (
                <button onClick={() => dispatch(deleteFromCart(listing, cart))}>
                  delete
                </button>
              ) : null}
              <ListingPreview listing={listing} />
            </div>
          ))}
          <div>
            <button disabled={editClicked} onClick={() => sellItems(user)}>
              Checkout
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
