import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./auth.css";

const LogoutButton = ({ setProInfo }) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <span
      onClick={() => onLogout().then(() => setProInfo(false))}
      className="logOutBtn"
    >
      Logout
    </span>
  );
};

export default LogoutButton;
