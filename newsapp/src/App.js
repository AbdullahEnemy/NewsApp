import "./App.css";
import Navbar from "./compnents/Navbar";
import React, { Component } from "react";
import News from "./compnents/News";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News></News>
      </div>
    );
  }
}
