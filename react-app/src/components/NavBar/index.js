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
  const history = useHistory();
  const [cart, setCart] = useState(false);

  function sellPage() {
    return history.push("/sell");
  }

  function showCart() {
    return <div className="cart">no way</div>;
  }
  return (
    <nav>
      <div className="navBar">
        <NavLink to="/" exact={true} activeClassName="active">
          Home
        </NavLink>

        <NavLink to="/listings" exact={true} activeClassName="active">
          View listings
        </NavLink>
        {!user ? (
          <div>
            <LoginFormModal /> <SignUpFormModal />
          </div>
        ) : null}
        {user ? <button onClick={sellPage}>Sell</button> : null}
        {user ? <CartModal /> : null}
        {user ? <LogoutButton /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
