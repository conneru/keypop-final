import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import "./Signup.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
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
      <form onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <label>Sign Up</label>
        <div className="all-inputs" name="all">
          <div className="input-container">
            <label>User Name</label>
            <input
              className="form-input"
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              className="form-input"
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className="input-container">
            <label>Repeat Password</label>
            <input
              className="form-input"
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
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
