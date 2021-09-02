import React, { Component } from "react";
import HeaderTile from "./components/HeaderTile.js";
import ListTile from "./components/ListTile";
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTile />
        <ListTile title="Contact Details" type="contacts" />
        <ListTile title="Qualifications" type="qualifications" />
        <ListTile title="Languages" type="languages" />
      </div>
    );
  }
}

export default App;
