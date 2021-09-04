import React, { Component } from "react";
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
    this.setState({
      items: this.state.items.filter((item) => {
        return item !== key;
      }),
    });
  }

  render() {
    const { items } = this.state;

    const arrItems = items.map((item) => {
      return (
        <this.props.itemType
          key={item}
          id={item}
          handleDel={this.handleDeleteItem}
          hasDelete={true}
          tag="div"
          editing={true}
        />
      );
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
