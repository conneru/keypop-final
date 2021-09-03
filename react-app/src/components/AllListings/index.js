import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllListings } from "../../store/listing";
// import EditListingModal from "../EditListing";
import ListingPreview from "../ListingPreview";

import "./Listings.css";

function AllListings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllListings());
  }, [dispatch]);

  const listings = useSelector((state) => state.listingsReducer.listings);
  return (
    <>
      <h1 className="allTitle">Shop things we love</h1>
      <div className="wrapper">
        <div className="allList">
          {listings.map((listing) => (
            <ListingPreview key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllListings;
