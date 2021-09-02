import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByUser } from "../../store/listing";
import { getOneUser } from "../../store/session";
import ListingPreview from "../ListingPreview";

function ProfilePage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.curUser);
  const listings = useSelector((state) => state.listingsReducer.userListings);

  useEffect(() => {
    dispatch(getOneUser(userId));
    dispatch(fetchByUser(userId));
  }, [dispatch, userId]);

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
      <div className="wrapper">
        <div className="allList">
          {listings.map((listing) => (
            <ListingPreview listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
