import React, { Component } from 'react'
import SearchField from "./SearchField";
import logo from "../img/techkids.png";
import ProfilePanel from "./ProfilePanel";
import { BrowserRouter, Link, Route } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="text-left">
            <Link to={`/`}>
              <img src={logo} alt="techkid" />
            </Link>
          </div>
          <SearchField onSearchChanged={this.props.onSearchChanged} />
          <ProfilePanel username={this.props.username} onLogin={this.props.onLogin} />
        </div>
      </div>


    )
  }
}

