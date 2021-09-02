import { setErrors } from "./errors";

const GET_ALL_LISTINGS = "listings/getAllListings";
const GET_ONE_LISTING = "listings/getOneListing";
const DELETE_LISTINGS = "listings/deleteListing";
const CREATE_LISTING = "listings/createListing";
const EDIT_LISTING = "listings/editListing";
const SELL_LISTING = "listings/sellListing";
const GET_USER_LISTINGS = "listings/getUserListings";

const getAllListings = (listings) => {
  return { type: GET_ALL_LISTINGS, listings };
};

const getUserListings = (listings) => {
  return { type: GET_USER_LISTINGS, listings };
};

const deleteListing = (id) => {
  return { type: DELETE_LISTINGS, id };
};

const sellAListing = (listing) => {
  return { type: SELL_LISTING, listing };
};

const addListing = (listing) => {
  return { type: CREATE_LISTING, listing };
};
const editAListing = (listing) => {
  return { type: EDIT_LISTING, listing };
};

const oneListing = (listing) => {
  return { type: GET_ONE_LISTING, listing };
};

export const sellListing = (payload, id) => async (dispatch) => {
  const res = await fetch(`/api/listings/${id}/sell`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const listing = await res.json();
    dispatch(sellAListing(listing));
  }
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
    return listing;
  } else {
    const errors = await res.json();
    dispatch(setErrors(errors));
  }
};
export const editListing = (payload, id) => async (dispatch) => {
  const res = await fetch(`/api/listings/${id}`, {
    method: "PUT",
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

export const fetchOneListing = (id) => async (dispatch) => {
  const res = await fetch(`/api/listings/${id}`);

  if (res.ok) {
    const listing = await res.json();
    dispatch(oneListing(listing));
  }
};

export const fetchByUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/listings/user/${userId}`);

  if (res.ok) {
    const listings = await res.json();
    dispatch(getUserListings(listings));
  }
};

const initialState = { listings: [], curListing: {} };

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LISTINGS:
      return { ...state, ...action.listings, curListing: {} };
    case GET_USER_LISTINGS:
      return { ...state, ...action.listings, curListing: {} };
    case CREATE_LISTING:
      return { ...state, listings: [action.listing, ...state.listings] };
    case EDIT_LISTING:
      return { ...state, curListing: action.listing };
    case GET_ONE_LISTING:
      return { ...state, curListing: action.listing };
    case SELL_LISTING:
      let checkList = action.listing;
      if (state.curListing.id !== action.listing.id) {
        checkList = state.curListing;
      }
      console.log(action.listing);
      return {
        ...state,
        listings: [
          ...state.listings.filter((list) => list.id !== action.listing.id),
        ],
        curListing: checkList,
      };
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
