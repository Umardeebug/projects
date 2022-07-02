import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { ImageSlider } from "./imageslider";
import { Counter } from "./counter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  hideButton = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const buttonText = this.state.visible ? "hide" : "show";
    return (
      <div className="App">
        {this.state.visible ? <Counter /> : <ImageSlider />}
        <button onClick={this.hideButton}>{buttonText}</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
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
