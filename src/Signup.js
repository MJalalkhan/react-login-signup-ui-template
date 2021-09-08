import React, { Component } from "react";
 

const Signup = () => { 
  
    return (
      <form>
        <h3>Sign up to GitHub</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
    
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" >
          Sign up
        </button>
        <div className="have-account">
          <p>Have an account on Github?
            <a href="/Sign-in">Sign-in</a>
          </p>
        </div>
      </form>
    );
  }
  export default Signup;
