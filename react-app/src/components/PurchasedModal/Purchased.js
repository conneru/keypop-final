import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByPurchaser } from "../../store/listing";
import ListingPreview from "../ListingPreview";
import "./PurchasedModal.css";

const Purchased = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const listings = useSelector(
    (state) => state.listingsReducer.purchasedListings
  );

  useEffect(() => {
    dispatch(fetchByPurchaser(userId));
  }, [dispatch, userId]);

  return (
    <div className="purContain">
      <div className="purWrap">
        <div className="purTitle">
          <label>Purchased Items</label>
        </div>
        <div className="wrapper">
          <div className="allListPur">
            {listings.map((listing) => (
              <ListingPreview key={listing.id} listing={listing} />
            ))}
            {!listings.length ? (
              <div>You havent purchased anything yet!</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Purchased;
