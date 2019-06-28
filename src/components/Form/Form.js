import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      image: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentCoin.name !== this.props.currentCoin.name) {
      this.setState({
        name: this.props.currentCoin.name,
        price: this.props.currentCoin.price,
        image: this.props.currentCoin.image
      });
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  createCoin = e => {
    e.preventDefault();

    const { name, price, image } = this.state;

    let newCoin = {
      name,
      price,
      image
    };

    this.props.createCoin(newCoin);

    this.setState({
      name: "",
      price: 0,
      image: ""
    });
  };

  updateCoin = e => {
    e.preventDefault();

    const { id } = this.props.currentCoin;
    const { name, price, image } = this.state;
    let updatedCoin = {
      name,
      price,
      image
    };

    this.props.updateCoin(id, updatedCoin);

    this.setState({
      name: "",
      price: 0,
      image: ""
    });
  };

  render() {
    console.log(this.props);
    const { name, price, image } = this.state;
    const { editing } = this.props;
    return (
      <div className="form-container">
        <form
          className="form"
          onSubmit={editing ? this.updateCoin : this.createCoin}
        >
          <h1>Coin Generator</h1>
          <input
            name="name"
            type="text"
            placeholder="Coin Name"
            onChange={this.handleChange}
            value={name}
          />
          <input
            name="price"
            type="number"
            placeholder="Coin Price"
            onChange={this.handleChange}
            value={price}
          />
          <input
            name="image"
            type="text"
            placeholder="Coin Image"
            onChange={this.handleChange}
            value={image}
          />
          {editing ? (
            <button>Update Coin</button>
          ) : (
            <button>Create Coin</button>
          )}
        </form>
      </div>
    );
  }
}
