import React, { Component } from "react";
import HeaderTile from "./components/HeaderTile.js";
import ListTile from "./components/ListTile";
import Editable from "./components/Editable";
import EducationItem from "./components/EducationItem";
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTile />
        <ListTile itemType={Editable} title="Contact Details" type="contacts" />
        <ListTile
          itemType={Editable}
          title="Qualifications"
          type="qualifications"
        />
        <ListTile itemType={Editable} title="Languages" type="languages" />
        <ListTile itemType={EducationItem} title="Education" />
      </div>
    );
  }
}

export default App;
