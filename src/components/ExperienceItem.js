import React, { Component } from "react";
import Editable from "./Editable";
import DateRange from "./DateRange";

class ExperienceItem extends Component {
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
          placeholder="Workplace.."
          editing={true}
        />
        <DateRange />
        <Editable
          type="input"
          hasDelete={false}
          tag="div"
          placeholder="Position.."
          editing={true}
        />
        <Editable
          type="textarea"
          hasDelete={false}
          tag="div"
          placeholder="Description of Skills.."
          editing={true}
        />

        <button onClick={this.handleDel}>🗑</button>
      </div>
    );
  }
}

export default ExperienceItem;
