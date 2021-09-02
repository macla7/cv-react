import React, { Component } from "react";
import Editable from "./Editable";
import uniqid from "uniqid";

class ListTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.handleNewItem = this.handleNewItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleNewItem() {
    this.setState({
      items: [...this.state.items, uniqid()],
    });
  }

  handleDeleteItem(key) {
    console.log(this.state.items);
    console.log(key);
    this.setState({
      items: this.state.items.filter((item) => {
        return item !== key;
      }),
    });
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
              key={item}
              id={item}
              handleDel={this.handleDeleteItem}
              hasDelete={true}
              tag="div"
            />
          );
        default:
          return <div>Error</div>;
      }
    });

    return (
      <section className="listTile">
        <h2>{this.props.title}</h2>
        <div className="tile-arr">{arrItems}</div>
        <button onClick={this.handleNewItem}>+</button>
      </section>
    );
  }
}

export default ListTile;
