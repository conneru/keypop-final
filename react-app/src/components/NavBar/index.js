import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignupFormModal";
import CartModal from "../CartModal";
import { login } from "../../store/session";
import "./NavBar.css";

const NavBar = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [proInfo, setProInfo] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const clickedOutside = (e) => {
      if (proInfo && ref.current && !ref.current.contains(e.target)) {
        setProInfo(false);
      }
    };
    document.addEventListener("mousedown", clickedOutside);
    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [proInfo]);

  const demoHandler = (e) => {
    e.preventDefault();
    dispatch(login("new@mail.com", "pass"));
  };

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
          <div className="noUser">
            <span className="demo" onClick={demoHandler}>
              Demo
            </span>
            <div>
              <LoginFormModal /> <SignUpFormModal />
            </div>
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
                onMouseDown={() => setProInfo(!proInfo)}
                // ref={ref}
              ></img>
            </div>
          </div>
        ) : null}
        {proInfo ? (
          <div className="proInfo" ref={ref}>
            <div className="profile">Your Profile</div>
            <div className="login">
              <LogoutButton setProInfo={setProInfo} />
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
