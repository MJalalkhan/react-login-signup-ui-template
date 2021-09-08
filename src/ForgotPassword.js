import React, { Component } from "react";
 
const ForgotPassword = () => { 
    return (
      <>
      <form>
        <h5>Forgot Password!</h5>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        
        </form>
        <button type="submit" className="btn btn-primary btn-block" >
          Send On Email
        </button>
    </>
    );
    }
  export default ForgotPassword;
