import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Monsters Rolodex</p>
          <input placeholder={"search monsters"} />
          {this.state.monsters.map((monster, index) => {
            return <h1 key={index}>{monster.name}</h1>;
          })}
        </header>
      </div>
    );
  }
}

export default App;
