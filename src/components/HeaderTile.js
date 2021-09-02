import React, { Component } from "react";
import Editable from "./Editable";

class HeaderTile extends Component {
  render() {
    return (
      <div className="headerTile">
        <Editable hasDelete={false} tag="h1" />
        <Editable hasDelete={false} tag="h1" />
        <Editable hasDelete={false} tag="h2" />
      </div>
    );
  }
}

export default HeaderTile;
