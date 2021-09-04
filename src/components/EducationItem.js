import React, { Component } from "react";
import Editable from "./Editable";

class EducationItem extends Component {
  constructor(props) {
    super(props);

    // figure out what I need from here
    this.state = {
      id: this.props.id,
      text: this.props.text,
      editing: this.props.editing,
    };
  }

  render() {
    return (
      <div>
        <label>Name of Institution</label>
        <Editable
          hasDelete={false}
          tag="div"
          placeholder="School or University.."
          value={this.state.text}
          editing={true}
        />
      </div>
    );
  }
}

export default EducationItem;
