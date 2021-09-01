import React, { Component } from "react";

class Editable extends Component {
  constructor(props) {
    super(props);

    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e) {
    this.props.handleBlur(this.props.id, e.target.value);
  }

  render() {
    const { editing, text } = this.props;
    if (editing) {
      return (
        <input className="editable" autoFocus onBlur={this.handleBlur}></input>
      );
    } else {
      return <this.props.tag className="editable">{text}</this.props.tag>;
    }
  }
}

export default Editable;
