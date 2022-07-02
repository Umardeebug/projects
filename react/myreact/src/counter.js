import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("mounting...");
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }

  incrementButton = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log("you incremented");
  };

  decrementButton = () => {
    this.setState({
      count: this.state.count - 1,
    });
    console.log("you decremented");
  };

  resetButton = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.incrementButton}>Increment</button>
        <button onClick={this.resetButton}>reset</button>
        <button onClick={this.decrementButton}>decrement</button>
      </div>
    );
  }
}
