import React, { Component } from "react";

class Editable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      text: this.props.text,
      editing: this.props.editing,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  async handleBlur(e) {
    const container = e.target.parentElement;
    if (!this.isBlank(container)) {
      this.save(container.firstChild);
      this.lock();
    }
  }

  save(input) {
    this.setState({
      text: input.value,
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

  handleChange(event) {
    this.isBlank(event.target.parentElement);
    this.save(event.target);
  }

  handleDel() {
    this.props.handleDel(this.state.id);
  }

  isBlank(container) {
    if (container.firstChild.value === "") {
      container.lastChild.classList.add("error-active");
      return true;
    } else {
      container.lastChild.classList.remove("error-active");
    }
  }

  render() {
    const { editing, text } = this.state;
    if (editing) {
      return (
        <div className="editable">
          <this.props.type
            required
            autoFocus
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={text ? text : ""}
            placeholder={this.props.placeholder}
          />
          {this.props.hasDelete ? (
            <button onMouseDown={this.handleDel}>🗑</button>
          ) : (
            <div></div>
          )}
          <span>Don't leave blank plz</span>
        </div>
      );
    } else {
      return (
        <div className="editable" onClick={this.handleClick}>
          <this.props.tag>{text}</this.props.tag>
        </div>
      );
    }
  }
}

export default Editable;
