import React from "react";

const ItemForm = props => {
  return (
    <div className="row">
      <div className="col-7">
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="item">Add a new item to your pantry</label>
            <input
              type="text"
              className="form-control"
              id="item"
              name="newItem"
              value={props.newItem}
              onChange={props.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
