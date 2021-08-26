import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignupFormModal";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>

        <NavLink to="/listings" exact={true} activeClassName="active">
          View listings
        </NavLink>

        <LoginFormModal />

        <SignUpFormModal />

        <LogoutButton />
      </div>
    </nav>
  );
};

export default NavBar;
