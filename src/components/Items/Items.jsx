import React, { Component } from "react";
import ItemRow from "../ItemRow/ItemRow";

class Items extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Garlic Salt",
        calorieCount: 0,
      },
      {
        id: 2,
        name: "Macaroni",
        caloreCount: 100,
      },
      {
        id: 3,
        name: "Canned Pinto Beans",
        calorieCount: 25,
      },
    ],
    newItem: "",
  };
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value,
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    const newItem = {
      id: this.state.items.length + 1,
      name: this.state.newItem,
    };
    
    const itemsArray = [...this.state.items];
    itemsArray.push(newItem);
    
    this.setState({
      items: itemsArray,
      newItem: ""
    });
  };
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item) => (
                  <ItemRow {...item} key={item.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="item" className="form-label">
                  Add a new item to your pantry.
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="item"
                  value={this.state.newItem}
                  name="newItem"
                  onChange={this.handleInputChange}
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