const GET_ALL_LISTINGS = "listings/getAllListings";
const DELETE_LISTINGS = "listings/deleteListing";
const CREATE_LISTING = "listings/createListing";
const EDIT_LISTING = "listings/editListing";

const getAllListings = (listings) => {
  return { type: GET_ALL_LISTINGS, listings };
};

const deleteListing = (id) => {
  return { type: DELETE_LISTINGS, id };
};

const addListing = (listing) => {
  return { type: CREATE_LISTING, listing };
};
const editAListing = (listing) => {
  return { type: EDIT_LISTING, listing };
};

export const fetchAllListings = () => async (dispatch) => {
  const res = await fetch("/api/listings/");

  if (res.ok) {
    const listings = await res.json();
    dispatch(getAllListings(listings));
  }
};

export const createListing = (payload) => async (dispatch) => {
  const res = await fetch(`/api/listings/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const listing = await res.json();
    dispatch(addListing(listing));
  }
};
export const editListing = (payload, id) => async (dispatch) => {
  const res = await fetch(`/api/listings/${id}`, {
    method: "PuT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const listing = await res.json();
    dispatch(editAListing(listing));
  }
};

export const deleteOneListing = (id) => async (dispatch) => {
  const res = await fetch(`/api/listings/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteListing(id));
  }
};

const initialState = { listings: [] };

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LISTINGS:
      return { ...state, ...action.listings };
    case CREATE_LISTING:
      return { ...state, listings: [action.listing, ...state.listings] };
    case EDIT_LISTING:
      return { ...state, ...action.listing };
    case DELETE_LISTINGS:
      return {
        ...state,
        listings: [
          ...state.listings.filter((listing) => listing.id !== action.id),
        ],
      };
    default:
      return state;
  }
};

export default listingsReducer;
