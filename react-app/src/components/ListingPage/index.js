import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchOneListing, deleteOneListing } from "../../store/listing";
import { addToCart } from "../../store/cart";
import EditListingModal from "../EditListing";
import "./ListingPage.css";

const ListingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const listing = useSelector((state) => state.listingsReducer.curListing);
  const user = useSelector((state) => state.session.user);
  const cart = useSelector((state) => state.cartReducer.cart);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    dispatch(fetchOneListing(id));

    for (let user in cart) {
      for (let item of cart[user]) {
        if (item.id === listing.id) {
          return setInCart(true);
        }
      }
      setInCart(false);
    }
    if (Object.keys(cart).length === 0) {
      setInCart(false);
    }
  }, [dispatch, id, cart, listing.id]);

  function addCart(listing, cart) {
    dispatch(addToCart(listing, cart));
  }
  return (
    <div>
      <img alt={listing?.id} src={listing?.image} className="listingImg"></img>
      <div>{listing?.description}</div>
      {listing?.sold ? (
        <span>SOLD</span>
      ) : (
        <div>
          {user?.id !== listing?.userId && user ? (
            <button onClick={() => addCart(listing, cart)} disabled={inCart}>
              {inCart ? "Added to Cart" : "Add to Cart"}
            </button>
          ) : null}
        </div>
      )}
      {user?.id === listing?.userId ? (
        <div>
          <EditListingModal listing={listing} />
          <button
            onClick={() =>
              dispatch(deleteOneListing(listing.id)).then(() =>
                history.push("/listings")
              )
            }
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ListingPage;
