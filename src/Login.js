import React, { useState } from "react";
import { auth } from "./config/fire";
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { tokenSlice } from "./features/Auth/authSlice";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        dispatch(tokenSlice(u.user.uid));
        if (u.user.uid) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container"> 
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input" 
        ></input>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input" 
        ></input>
        <button type="submit" className="login-button">Login</button>
        <Link to="/signup" className="signup-link">Don't have an account?</Link> 
      </form>
    </div>
  );
};

export default Login;
