import React, { Component } from "react";
import ItemRow from "../ItemRow/ItemRow";

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
    ]
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table class="table">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
