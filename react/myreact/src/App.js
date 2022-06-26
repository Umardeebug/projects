import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, Umar!</h1>
        <h2>
          It is <br />
          {this.state.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
}

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
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

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.incrementButton}>Increment</button>
        <button onClick={this.decrementButton}>decrement</button>
      </div>
    );
  }
}
