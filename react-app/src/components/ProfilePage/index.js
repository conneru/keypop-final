import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByUser, fetchByPurchaser } from "../../store/listing";
import { getOneUser } from "../../store/session";
import ListingPreview from "../ListingPreview";
import "./ProfilePage.css";

function ProfilePage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.curUser);
  const listings = useSelector((state) => state.listingsReducer.userListings);
  const [sell, setSell] = useState(true);

  useEffect(() => {
    dispatch(getOneUser(userId));
    dispatch(fetchByUser(userId));
  }, [dispatch, userId]);

  function switchSell() {
    if (!sell) {
      setSell(!sell);
      dispatch(fetchByUser(userId));
    }
  }
  function switchPurc() {
    if (sell) {
      setSell(!sell);
      dispatch(fetchByPurchaser(userId));
    }
  }

  if (!user) {
    return "404 user not found";
  }

  return (
    <div>
      <div className="userInfo">
        <img alt="proPic" src={user?.profilepic} className="profPic"></img>
        <p>{user?.username}</p>
        {/* <p>{user.email}</p> */}
      </div>
      <div className="contain">
        <div className="switch">
          <label
            className={`sell ${sell ? "clicked" : null}`}
            onClick={switchSell}
          >
            Selling
          </label>
          <label
            className={`purc ${!sell ? "clicked" : null}`}
            onClick={switchPurc}
          >
            Purchased
          </label>
        </div>
        <div className="wrapper">
          <div className="allList">
            {listings.map((listing) => (
              <ListingPreview listing={listing} />
            ))}
            {sell && !listings.length ? (
              <div>User doesn't have anything for sale</div>
            ) : null}
            {!sell && !listings.length ? (
              <div>User hasn't purchased anything</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
