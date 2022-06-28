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

export class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        "https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=620&quality=85&auto=format&fit=max&s=045337444a23fba8351dbf0a1469c387",
        "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
      ],
      index: 0,
    };
  }

  previousButton = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  nextButton = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  render() {
    return (
      <div>
        <h2> below are images: </h2>
        <img src={this.state.images[this.state.index]} />
        <button onClick={this.previousButton}>Previus Button</button>
        <button onClick={this.nextButton}>Next Button</button>
      </div>
    );
  }
}
