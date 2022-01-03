import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-2">
      <div className="col-5 ">
        <h2 >
          {props.product.name} = <span className=" btn btn-secondary"> ₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3 mt-1">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-light">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2 mt-1">
        {props.product.quantity * props.product.price}
      </div>
      <div className="col-1 mt-1">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
