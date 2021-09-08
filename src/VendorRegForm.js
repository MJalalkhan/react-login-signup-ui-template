import React from "react";
import { Grid } from "@material-ui/core";
import { useState } from "react";

const VendorRegForm = () => {
  // const [FullName, setName] = useState("");   
  // const [EmailAddress, setEmail] = useState("");
  // const [ResidentialAddress, setAddress] = useState("");
  // const [ContactNo, setContact] = useState("");
  // const [ShopName, setShopName] = useState('');
  // // const [ShopBasedIn, setShopBased] = useState('');
  // const [AccountNo, setAccountNo] = useState('');
  // const [Password, setPassword] = useState('');
  // const [ConfirmPassword, setConfirmPass] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = { FullName, EmailAddress, ResidentialAddress, ContactNo, ShopName, AccountNo, Password, ConfirmPassword};
  //   // console.log("json object---",data);

  //   fetch("http://localhost:8000/data", {
  //     method: 'post',
  //     headers:{"Content-Type":"application/json"},
  //     body: JSON.stringify(data)
  //   }).then(response=> {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       // HANDLE ERROR
  //       throw new Error('Something went wrong');
  //     }
  //   }).then(data => {
  //     // HANDLE RESPONSE DATA
  //     console.log("hhhhhhhhhhhh",data)
  //   }).catch((error) => {
  //     // HANDLE ERROR
  //     console.log(error)
  //   });
  // };
  // Put it in every input field
  // value={FullName} onChange={(e)=>setName(e.target.value)}
  // value={EmailAddress} onChange={(e)=>setEmail(e.target.value)} 
  // value={ResidentialAddress} onChange={(e)=>setAddress(e.target.value)} 
  // value={ContactNo} onChange={(e)=>setContact(e.target.value)} 
  // value={ShopName} onChange={(e)=>setShopName(e.target.value)} 
  // value={AccountNo} onChange={(e)=>setAccountNo(e.target.value)} 
  // value={Password} onChange={(e)=>setPassword(e.target.value)} 
  // value={ConfirmPassword} onChange={(e)=>setConfirmPass(e.target.value)} 
  
  return (
    <div>
      <form /*onSubmit={handleSubmit}*/>
        <p className="h4 text-center mb-4">Register</p>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <label className="grey-text">Full Name</label>
            <input type="text" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Email Address</label>
            <input type="email" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Residential Address</label>
            <input type="text" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Contact no.</label>
            <input type="text" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Shop Name</label>
            <input type="text" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label for="cars">Shop Based in:</label>

            <select name="Shop Location" id="location">
              <option value="pakistan">Pakistan</option>
              <option value="afghanistan">Afghanistan</option>
              <option value="india">India</option>
              <option value="china">China</option>
            </select>
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Account no.</label>
            <input type="text" className="form-control" 
            />
          </Grid>
          <br />
          <Grid item xs={6}>
            <p>Account Type</p>
            <input type="radio" value="Male" name="personal" /> Personal
            <input type="radio" value="Female" name="business" /> Business
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Password</label>
            <input type="password" className="form-control" 
            />
          </Grid>

          <Grid item xs={6}>
            <label className="grey-text">Confirm Password</label>
            <input type="password" className="form-control" 
            />
          </Grid>
          <Grid item xs={12}>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default VendorRegForm;
