import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { clearCart } from "../../store/cart";
import "./auth.css";

const LogoutButton = ({ setProInfo }) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <span
      onClick={() =>
        onLogout()
          .then(() => dispatch(clearCart()))
          .then(() => setProInfo(false))
      }
      className="logOutBtn"
    >
      Logout
    </span>
  );
};

export default LogoutButton;
