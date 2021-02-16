import React, { Component } from "react";
import ItemRow from "../ItemRow/ItemRow";
// import ItemForm from "../ItemForm/ItemForm"

class Items extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "garlic salt",
        calorieCount: 0
      },
      {
        id: 2,
        name: "macaroni noodles",
        calorieCount: 100
      },
      {
        id: 3,
        name: "canned pinto beans",
        calorieCount: 25
      }
    ],
    newItem: "banana"
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.item.length + 1,
      name: this.state.newItem
    };

    const itemsArray = [this.state.items];
    itemsArray.push(newItem);

    this.setState({
      items: itemsArray
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table mb-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Calorie Count</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map(item => (
                  <ItemRow key={item.id} {...item} />
                ))}
              </tbody>
            </table>
            {/* <ItemForm value={this.state.newItem}/> */}
          </div>
        </div>

        <div className="row">
          <div className="col-7">
            <form onSubmit={this.state.handleSubmit}>
              <div className="form-group">
                <label htmlFor="item">Add a new item to your pantry</label>
                <input
                  type="text"
                  className="form-control"
                  id="item"
                  name="newItem"
                  value={this.state.newItem}
                  onChange={this.state.handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
