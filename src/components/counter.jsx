import React, { Component } from "react";
class Counter extends Component {
  render() {
    const { onIncrement, counter, onDelete } = this.props;
    return (
      <div>
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className={this.getBadgeClasses()}
        >
          {this.format()}
        </span>
        <button
          onClick={() => {
            onIncrement(counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    const { counter } = this.props;
    let classes = "badge m-5 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  format() {
    const { counter } = this.props;
    const { value } = counter;
    return value === 0 ? <h1>Zero</h1> : <h1>{value}</h1>;
  }
}

export default Counter;
