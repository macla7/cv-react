import React, { Component } from "react";
import Editable from "./Editable";

class HeaderTile extends Component {
  render() {
    return (
      <div className="headerTile">
        <Editable
          hasDelete={false}
          tag="h1"
          placeholder="First Name.."
          text="First Name"
          editing={false}
        />
        <Editable
          hasDelete={false}
          tag="h1"
          placeholder="Last Name.."
          text="Last Name"
          editing={false}
        />
        <Editable
          hasDelete={false}
          tag="h2"
          placeholder="Job Title.."
          text="Job Title"
          editing={false}
        />
      </div>
    );
  }
}

export default HeaderTile;
