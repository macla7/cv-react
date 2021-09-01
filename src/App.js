import React, { Component } from "react";
import BasicTile from "./components/BasicTile";
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicTile title="Contact Details" type="contacts" />
        <BasicTile title="Qualifications" type="qualifications" />
        <BasicTile title="Languages" type="languages" />
      </div>
    );
  }
}

export default App;
