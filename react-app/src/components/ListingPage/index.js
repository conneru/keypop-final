import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneListing } from "../../store/listing";
import { addToCart } from "../../store/cart";

const ListingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listing = useSelector((state) => state.listingsReducer.curListing);

  useEffect(() => {
    dispatch(fetchOneListing(id));
  }, [dispatch, id]);
  function addCart(listing) {
    dispatch(addToCart(listing));
  }
  return (
    <div>
      <img alt={listing?.id} src={listing?.image}></img>
      <div>{listing?.description}</div>
      <button onClick={() => addCart(listing)}>Add to Cart</button>
    </div>
  );
};

export default ListingPage;
