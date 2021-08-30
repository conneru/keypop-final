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

  useEffect(() => {
    dispatch(fetchOneListing(id));
  }, [dispatch, id]);
  function addCart(listing) {
    dispatch(addToCart(listing));
  }
  return (
    <div>
      <img alt={listing?.id} src={listing?.image} className="listingImg"></img>
      <div>{listing?.description}</div>
      {user?.id !== listing.userId ? (
        <button onClick={() => addCart(listing)}>Add to Cart</button>
      ) : null}
      {user?.id === listing.userId ? (
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
