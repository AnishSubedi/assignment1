import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import "../App.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selecteditemid: null
    };
    this.handleOnDrop = this.handleOnDrop.bind(this);
  }

  handleonDragstart = (event, itemsid) => {
    return this.setState({ selecteditemid: itemsid });
  };
  handleDrageOver = (event, itemsid) => {
    return event.preventDefault(event);
  };
  handleOnDrop = (event, itemsid) => {
    let i = 0;

    var self = this;

    return (function() {
      [
        self.state.dishes[self.state.selecteditemid],
        self.state.dishes[itemsid]
      ] = [
        self.state.dishes[itemsid],
        self.state.dishes[self.state.selecteditemid]
      ];

      self.state.dishes.map(item => {
        console.log([item]);
        item.id = i;
        i++;
      });
      self.forceUpdate();
    })();
  };

  render() {
    const items = this.state.dishes.map(items => {
      return (
        <div className="column">
          <div className="card">
            <img
              key={items.id}
              draggable="true"
              onDragStart={event => this.handleonDragstart(event, items.id)}
              onDragOver={event => this.handleDrageOver(event, items.id)}
              onDrop={event => this.handleOnDrop(event, items.id)}
              src={items.image}
              alt=" render here"
            />
            <p className="title">
              <h2>{items.name}</h2>
              <h5>{items.description}</h5>
              <button>Read More</button>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <img
            className="img"
            src="./assets/images/header.png"
            alt="images will be here"
          />
        </div>
        <div className="row">{items}</div>
        <div className="row">
          <img
            className="img"
            src="./assets/images/footer.png"
            alt="images will be here"
          />
        </div>
      </div>
    );
  }
}

export default Body;
