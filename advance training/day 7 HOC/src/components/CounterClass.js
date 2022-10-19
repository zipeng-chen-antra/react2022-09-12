import React, { Component } from "react";
import CounterFn from "./CounterFn";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      amount: "",
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.addByAmount = this.addByAmount.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  addByAmount() {
    this.setState({count: this.state.count + +this.state.amount})
  }

  render() {
    return (
      <div>
        <h1>Class Counter Component</h1>
      
        <div>{this.state.count}</div>
        <button onClick={this.reset}>reset</button>
        <button onClick={this.decrement}>minus</button>
        <button onClick={this.increment}>add</button>
        <input 
          value={this.state.amount}
          onChange={(e) => {
            this.setState({ amount: e.target.value });
          }}
        />
        <button onClick={this.addByAmount}>add by amount</button>
      </div>
    );
  }
}
