import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list";

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
          <CardList>
            {this.state.monsters.map((monster, index) => {
              return <h1 key={index}>{monster.name}</h1>;
            })}
          </CardList>
        </header>
      </div>
    );
  }
}

export default App;
