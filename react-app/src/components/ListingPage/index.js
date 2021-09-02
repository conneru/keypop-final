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
    <>
      <div className="listingContainer">
        <div className="imageWrapper">
          <img
            alt={listing?.id}
            src={listing?.image}
            className="listingImg"
          ></img>
        </div>
        <div className="listingWrapper">
          <div
            className="userInfo"
            onClick={() => history.push(`/profile/${listing.userId}`)}
          >
            <img
              alt="proPic"
              src={listing?.profilepic}
              className="profPic"
            ></img>
            <p>{listing?.username}</p>
          </div>
          <div className="profInfo">
            <div className="infoList">
              <p className="descript">{listing?.description}</p>
              <div className="listItem">
                Price
                <div className="info">
                  US$ {listing.price ? listing.price.toFixed(2) : null}
                </div>
              </div>
              <div className="listItem">
                Category
                <div className="info">{listing?.category}</div>
              </div>
              {listing.subcategory && listing?.category !== "Switches" ? (
                <div className="listItem">
                  Subcategory
                  <div className="info">{listing?.subcategory}</div>
                </div>
              ) : null}
              <div className="listItem">
                Condition
                <div className="info">{listing?.condition}</div>
              </div>
              {listing?.sold ? (
                <div className="sold">SOLD</div>
              ) : (
                <div>
                  {user?.id !== listing?.userId && user ? (
                    <button
                      onClick={() => addCart(listing, cart)}
                      disabled={inCart}
                      className="addTo"
                    >
                      {inCart ? "Added to Bag" : "Add to Bag"}
                    </button>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {user?.id === listing?.userId && user ? (
        <div className="editanddel">
          <EditListingModal listing={listing} />
          <span
            className="del"
            onClick={() =>
              dispatch(deleteOneListing(listing.id)).then(() =>
                history.push("/listings")
              )
            }
          >
            Delete
          </span>
        </div>
      ) : null}
    </>
  );
};

export default ListingPage;
