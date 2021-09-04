import React, { Component } from "react";
import { format, parseISO } from "date-fns";

class DateRange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: this.props.editing,
      startDate: "2015-01-01",
      endDate: "2020-12-01",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.save = this.save.bind(this);
    this.lock = this.lock.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log("beep");
    e.preventDefault();
    console.log("beep");
    console.log(e.target.firstChild.name);
    this.save(e.target);
    this.lock();
  }

  save(form) {
    this.setState({
      startDate: form.firstChild.value,
      endDate: form.children[1].value,
    });
  }

  lock() {
    this.setState({
      editing: false,
    });
  }

  handleClick() {
    console.log("hello");
    this.setState({
      editing: true,
    });
  }

  handleChange(e) {
    this.save(e.target.parentElement);
  }

  render() {
    const { editing, startDate, endDate } = this.state;
    if (editing) {
      return (
        <form onSubmit={this.handleSubmit} className="dateInputRange">
          <input
            type="date"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="endDate"
            value={this.state.endDate}
            onChange={this.handleChange}
          />
          <input type="submit" value="save" />
        </form>
      );
    } else {
      return (
        <div onClick={this.handleClick} className="dateRange">
          <div>{format(parseISO(startDate), "MMM yyyy")}</div>-
          <div>{format(parseISO(endDate), "MMM yyyy")}</div>
        </div>
      );
    }
  }
}

export default DateRange;
