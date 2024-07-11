import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check:1,
      user: "",
    };
  }

  componentDidMount() {
    console.log("Input componentDidMount called");
  }

  componentDidUpdate() {
    console.log("Input componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("Input componentWillUnmount called");
  }


  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.user}
          onChange={(e) => this.setState({ user: e.target.value })}
        />
      </div>
    );
  }
}
