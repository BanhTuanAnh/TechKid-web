import React, { Component } from 'react';
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "./axios";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import DetailScreen from './containers/DetailScreen';
import HomeScreen from './containers/HomeScreen';
import LoginScreen from './containers/LoginScreen';
class App extends Component {
  state = {
    logined:false
  }
  onLogout = () => {
    axios.delete("/api/auth", {
      username: "admin",
      password: "123456"
    })
      .then(response => {
        this.setState({
          username: "",
          id: "",
          logined:false
        })

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onLogin = () => {
    axios.post("/api/auth", {
      username: "admin",//.taget.value
      password: "123456"
    })
      .then(response => {
        this.setState({
          username: response.data.username,
          id: response.data.id,
          logined: true
        })
        this.props.history.push("/");
        console.log(this.state)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {

    return (
        <div className="App">
          <Route exact path="/" render={(props) => {
            return <HomeScreen {...props} username={this.state.username} onLogin={this.onLogin} />
          }} />
          <Route path="/api/images/:id" render={(props) => {
            return <DetailScreen {...props} logined={this.state.logined} username={this.state.username} onLogin={this.onLogin} />
          }} />
          <Route path="/api/auth" render={(props) => {
            return <LoginScreen {...props} logined={this.state.logined} username={this.state.username} onLogin={this.onLogin} />
          }} />

        </div>
    );
  }
}

export default withRouter(App);
