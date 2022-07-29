import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleInrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className={this.getBadgeClasses()}
        >
          {this.format()}
        </span>
        <button
          onClick={this.handleInrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-5 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  format() {
    const { value } = this.state;
    return value === 0 ? <h1>Zero</h1> : <h1>{value}</h1>;
  }
}

export default Counter;
