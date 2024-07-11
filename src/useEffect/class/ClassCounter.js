import React, { Component } from "react";
import Input from "./Input";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: 1,
      count: 0,
      show: true,
    };
  }

  componentDidMount() {
    console.log("ComponentDidMount called ");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleClose = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClose}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        <>
          <p>Counter: {this.state.count}</p>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
          {this.state.show && <Input />}
        </>
      </div>
    );
  }
}
