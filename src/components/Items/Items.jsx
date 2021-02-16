import React, { Component } from "react";

class Items extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "garlic salt"
      },
      {
        id: 2,
        name: "macaroni noodles"
      },
      {
        id: 3,
        name: "canned pinto beans"
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
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                    </tr>
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
