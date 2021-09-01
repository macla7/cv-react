import React, { Component } from "react";

class Editable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      text: "",
      editing: true,
      tag: "div",
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleBlur(e) {
    if (!this.isBlank(e)) {
      this.save(e);
      this.lock();
    }
  }

  save(e) {
    this.setState({
      text: e.target.value,
    });
  }

  lock() {
    this.setState({
      editing: false,
    });
  }

  handleClick(e) {
    this.setState({
      editing: true,
    });
  }

  handleChange(e) {
    this.isBlank(e);
    this.save(e);
  }

  handleDel() {
    this.props.handleDel(this.state.id);
  }

  isBlank(e) {
    if (e.target.value === "") {
      e.target.parentElement.lastChild.classList.add("error-active");
      e.target.focus();
      return true;
    } else {
      e.target.parentElement.lastChild.classList.remove("error-active");
    }
  }

  render() {
    const { editing, text } = this.state;
    if (editing) {
      return (
        <form className="editable">
          <input
            autoFocus
            required
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            value={text}
          ></input>
          <button onClick={this.handleDel}>🗑</button>
          <span>Cannot leave this blank plz</span>
        </form>
      );
    } else {
      return (
        <div className="editable" onClick={this.handleClick}>
          <this.state.tag>{text}</this.state.tag>
        </div>
      );
    }
  }
}

export default Editable;
