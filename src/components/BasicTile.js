import React, { Component } from "react";
import Editable from "./Editable";
import uniqid from "uniqid";

class BasicTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      item: {
        key: uniqid(),
        text: "",
        editing: true,
      },
    };

    this.handleNewItem = this.handleNewItem.bind(this);
    this.handleBlurItem = this.handleBlurItem.bind(this);
  }

  handleNewItem() {
    this.setState({
      items: [...this.state.items, this.state.item],
      item: {
        key: uniqid(),
        text: "",
        editing: true,
      },
    });
  }

  handleBlurItem(key, text) {
    console.log(this.state.items);
    this.setState({
      items: this.state.items.map((item) => {
        if (item.key === key) {
          item.text = text;
          item.editing = false;
        }
        return item;
      }),
    });
    console.log(this.state.items);
  }

  render() {
    const { items } = this.state;

    const arrItems = items.map((item) => {
      console.log(this.props.type);
      switch (this.props.type) {
        case "contacts":
        case "qualifications":
        case "languages":
          return (
            <Editable
              key={item.key}
              editing={item.editing}
              handleBlur={this.handleBlurItem}
              id={item.key}
              tag="div"
              text={item.text}
            />
          );
        default:
          return <div>Error</div>;
      }
    });

    return (
      <section className="basicTile">
        <h2>{this.props.title}</h2>
        <div className="tile-arr">{arrItems}</div>
        <button onClick={this.handleNewItem}>+</button>
      </section>
    );
  }
}

export default BasicTile;
