import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./login.component";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

import VendorRegForm from "./VendorRegForm";
import NavbarDrawer from "./NavbarDrawer";
import FirstNav from "./FirstNav";
import { Grid } from "@material-ui/core";
import AdminComp from "./AdminComp";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Grid container spacing={10}>
              <Grid item xs={12}></Grid>
              <Grid style={{width:'100%'}}>
                <FirstNav />
              </Grid>
              <Grid  >
                <NavbarDrawer />
              </Grid>
            </Grid>
            {/*  */}
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
            <Route exact path="/adminComp">
                <AdminComp/>
              </Route>
              <Route exact path="/">
                <Login/>
              </Route>
              <Route path="/VendorRegForm">
                <VendorRegForm />
              </Route>
              <Route path="/sign-in">
                <Login/>
              </Route>
              <Route path="/sign-up">
                <Signup/>
              </Route>
              <Route path="/ForgotPassword">
                <ForgotPassword/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
