import "./ListingPreview.css";
import { useHistory } from "react-router";

const ListingPreview = ({ listing }) => {
  const history = useHistory();

  function listPage(id) {
    return history.push(`/listings/${id}`);
  }
  return (
    <div className="prevDiv">
      <img
        className="prevImg"
        alt={listing?.id}
        src={listing?.image}
        onClick={() => listPage(listing?.id)}
      />
      <span className="price">US${listing?.price.toFixed(2)}</span>
    </div>
  );
};

export default ListingPreview;
