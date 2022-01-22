import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searchHandler(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <p>Monsters Rolodex</p>
        <SearchBox
          placeholder={"search monsters"}
          handleChange={this.searchHandler}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
