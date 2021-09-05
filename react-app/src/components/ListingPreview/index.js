import "./ListingPreview.css";
import { useHistory } from "react-router";

const ListingPreview = ({ listing }) => {
  const history = useHistory();

  function listPage(id) {
    return history.push(`/listings/${id}`);
  }
  return (
    <div className="container">
      <div className="prevDiv" onClick={() => listPage(listing?.id)}>
        <img
          className="prevImg"
          alt={listing?.id}
          src={listing?.image}
          onError={(e) =>
            (e.target.src =
              "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg")
          }
        />
        {listing.sold ? (
          <div className="overlay">
            <span id="soldText">Sold</span>
          </div>
        ) : null}
      </div>
      <span className="price">US${listing?.price.toFixed(2)}</span>
    </div>
  );
};

export default ListingPreview;
