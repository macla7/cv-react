import React, { Component } from "react";
import Editable from "./Editable";
import DateRange from "./DateRange";

class EducationItem extends Component {
  constructor(props) {
    super(props);

    this.handleDel = this.handleDel.bind(this);
  }

  handleDel() {
    this.props.handleDel(this.props.id);
  }

  render() {
    return (
      <div className="eduAndExpItem">
        <Editable
          type="input"
          hasDelete={false}
          tag="h3"
          placeholder="Name of Institution"
          editing={true}
        />
        <DateRange />
        <Editable
          type="input"
          hasDelete={false}
          tag="div"
          placeholder="Qualification/Degree.."
          editing={true}
        />
        <Editable
          type="input"
          hasDelete={false}
          tag="div"
          placeholder="Grade or GPA.."
          editing={true}
        />

        <button onClick={this.handleDel}>🗑</button>
      </div>
    );
  }
}

export default EducationItem;
