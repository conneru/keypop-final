import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import SignUpFormModal from "../SignupFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Login.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginDiv">
      <form onSubmit={onLogin}>
        <label>Log In</label>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="all-inputs">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              className="form-input"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button type="submit" className="loginBtn">
              Login
            </button>
          </div>
        </div>
        <span>
          Don't have an account? <SignUpFormModal />
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
