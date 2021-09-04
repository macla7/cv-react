import React, { Component } from "react";
import HeaderTile from "./components/HeaderTile.js";
import ListTile from "./components/ListTile";
import Editable from "./components/Editable";
import EducationItem from "./components/EducationItem";
import ExperienceItem from "./components/ExperienceItem";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar />
        <HeaderTile />
        <ListTile itemType={Editable} title="Contact Details" tag="li" />
        <ListTile itemType={Editable} title="Qualifications" tag="li" />
        <ListTile itemType={Editable} title="Languages" tag="li" />
        <Profile />
        <ListTile itemType={EducationItem} title="Education" />
        <ListTile itemType={ExperienceItem} title="Work Experience" />
        <ListTile itemType={Editable} title="Skills" tag="li" />
      </div>
    );
  }
}

export default App;
