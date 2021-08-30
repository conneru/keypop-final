import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import Errors from "../Errors";
import "./Signup.css";

const SignUpForm = ({ setShowModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const errors = useSelector((state) => state.errorsReducer);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      signUp(username, email, password, repeatPassword)
    );
    if (password !== repeatPassword) {
      errors.push("PASSWORDS MUST MATCH");
    } else {
      if (data) {
        setShowModal(false);
      }
    }
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signupDiv">
      <img
        alt="signup"
        src="https://cdn.thewirecutter.com/wp-content/media/2021/05/mechanicalkeyboards-2048px-2x1-0036.jpeg?auto=webp&quality=75&crop=2:1&width=1024"
      />
      <Errors />
      <form onSubmit={onSignUp}>
        <label>Sign Up</label>
        <div className="all-inputs" name="all">
          <div className="input-container">
            <label>User Name</label>
            <input
              className="form-input"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            ></input>
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              className="form-input"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <div className="input-container">
            <label>Confirm Password</label>
            <input
              className="form-input"
              type="password"
              name="repeat_password"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type="submit" className="signupBtn">
            Sign Up
          </button>
        </div>
        <span>
          Already have an account? <LoginFormModal />
        </span>
      </form>
    </div>
  );
};

export default SignUpForm;
