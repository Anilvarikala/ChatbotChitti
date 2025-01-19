import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
const Login = () => {
  const [signUp, setsignUp] = useState(true);
  return (
    <div className="login-page">
      <img src={assets.logo_big} alt="" />
      <form className="login">
        <h2>{signUp ? "Sign Up" : "Login"}</h2>
        {signUp ? (
          <input
            type="text"
            className="input"
            placeholder="User name"
            required
          />
        ) : null}

        <input type="email" className="input" placeholder="Email " />
        <input type="password" placeholder="password" className="input" />
        <button type="submit">{signUp ? "Create account" : "Login"}</button>
        <div className="login-check">
          <input type="checkbox" />
          <p>Agree to the terms and conditions</p>
        </div>
        <div className="login-check">
          <span>{signUp ? "Already have an account ?" : "Create an account ? "}</span>
          <span onClick={() => setsignUp(!signUp)} style={{ color: "#077EFF" }}>
            Click here
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
