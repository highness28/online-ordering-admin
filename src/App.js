import React, { Component } from "react";
import NavBar from "./components/layouts/NavBar";
import Content from "./components/layouts/Content";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
