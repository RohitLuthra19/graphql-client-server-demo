import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./default.css";
import Header from "../components/header";
import Users from "../components/users";
import AddUser from "../components/adduser";
import DeleteUser from "../components/deleteuser";
import UpdateUser from "../components/updateuser";

function Routes() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <div className="left-part">
          <Users />
        </div>
        <div className="right-part">
          <Switch>
            <Route path="/" exact component={AddUser} />
            <Route path="/add" component={AddUser} />
            <Route path="/update" component={UpdateUser} />
            <Route path="/delete" component={DeleteUser} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Routes;
