import React, { Component } from "react";
 

const Login = () => { 
  
    return (
      <>
      <form>
        <h3>Sign In to GitHub</h3>
        <div className="form-group">
          <label>Username or email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <p className="forgot-password text-right">
            <a href="/ForgotPassword"> Forgot password?</a>
          </p>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" >
          Sign in
        </button>
        
      </form>
      <div className="new-to-github">
      <p>New to Github?
        <a href="/Sign-up">Create Account</a>
      </p>
      </div>
    </>
    );
  }
  export default Login;
