import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignupFormModal";
import CartModal from "../CartModal";
import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  const [proInfo, setProInfo] = useState(false);
  const history = useHistory();

  function sellPage() {
    return history.push("/sell");
  }

  return (
    <nav>
      <div className="navBar">
        <NavLink to="/" exact={true} className="homeLink">
          <span className="logo">keypop</span>
        </NavLink>

        <NavLink to="/listings" exact={true} className="homeLink">
          View listings
        </NavLink>
        {!user ? (
          <div>
            <LoginFormModal /> <SignUpFormModal />
          </div>
        ) : null}
        {user ? (
          <div className="userStuffs">
            <div onClick={sellPage} className="sellBtn">
              Sell
            </div>
            <div>
              <CartModal className="cartModal" />
            </div>
            <div>
              <img
                alt="proPic"
                src={user.profilepic}
                className="proPic"
                onClick={() => setProInfo(!proInfo)}
              ></img>
            </div>
          </div>
        ) : null}
        {proInfo ? (
          <div className="proInfo">
            <div className="profile">Your Profile</div>
            <div className="login">
              <LogoutButton />
            </div>
          </div>
        ) : null}
        {/* {user ? <CartModal className="cartModal" /> : null}
        {user ? <LogoutButton /> : null} */}
      </div>
    </nav>
  );
};

export default NavBar;
