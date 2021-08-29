import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllListings, deleteOneListing } from "../../store/listing";
import EditListingModal from "../EditListing";
import ListingPreview from "../ListingPreview";

import "./Listings.css";

function AllListings() {
  const dispatch = useDispatch();

  function deletePost(id) {
    dispatch(deleteOneListing(id));
  }

  useEffect(() => {
    dispatch(fetchAllListings());
  }, [dispatch]);

  const listings = useSelector((state) => state.listingsReducer.listings);
  return (
    <div className="allList">
      {listings.map((listing) => (
        /* <div>
          <a href={`/listings:${listing.id}`}>
            <img alt={listing.id} src={listing.image}></img>
          </a>
          <EditListingModal listing={listing} />
          <button onClick={() => deletePost(listing.id)}>Delete</button>
        </div> */
        <ListingPreview listing={listing} />
      ))}
    </div>
  );
}

export default AllListings;
