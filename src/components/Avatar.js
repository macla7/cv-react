import React, { Component } from "react";

class Avatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleChange(e) {
    this.setState({
      src: e.target.value,
    });
  }

  handleDel() {
    this.setState({
      src: "",
    });
  }
  render() {
    if (this.state.src) {
      return (
        <div className="avatarTile">
          <img src={this.state.src} alt="avatar" />
          <button onClick={this.handleDel}>🗑</button>
        </div>
      );
    } else {
      return (
        <div className="avatarTile">
          <input
            type="text"
            placeholder="Image src for avatar.."
            value={this.state.src}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }
}

export default Avatar;
