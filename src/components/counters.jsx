import React, { Component } from "react";
import Counter from "./counter";
export default class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          ></Counter>
        ))}
        <button className="btn2 m- btn-sm btn-primary" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}
