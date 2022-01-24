import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      word: ["C", "H", "A", "L", "K"],
      words: [
        {
          id: 1,
          letter1: "",
          letter2: "",
          letter3: "",
          letter4: "",
          letter5: "",
        },
        {
          id: 2,
          letter1: "",
          letter2: "",
          letter3: "",
          letter4: "",
          letter5: "",
        },
        {
          id: 1,
          letter1: "",
          letter2: "",
          letter3: "",
          letter4: "",
          letter5: "",
        },
        {
          id: 1,
          letter1: "",
          letter2: "",
          letter3: "",
          letter4: "",
          letter5: "",
        },
        {
          id: 1,
          letter1: "",
          letter2: "",
          letter3: "",
          letter4: "",
          letter5: "",
        },
        {
          id: 1,
          letter1: "",
          letter2: "",
          letter3: "",
          letter4: "",
          letter5: "",
        },
      ],
      searchField: "",
      guessCount: 0,
      color1: "",
      color2: "",
      color3: "",
      color4: "",
      color5: "",
      colors: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searchHandler = (e) => {
    this.setState({ searchField: e.target.value });
  };

  submitHandler = () => {
    const { words, guessCount, word, colors } = this.state;

    const tempColors = { ...colors };

    if (word[0] === words[guessCount].letter1) {
      tempColors[guessCount][0] = "green";
    } else if (word.indexOf(words[guessCount].letter1) >= 0) {
      tempColors[guessCount][0] = "yellow";
    } else {
      tempColors[guessCount][0] = "grey";
    }

    if (word[1] === words[guessCount].letter2) {
      tempColors[guessCount][1] = "green";
    } else if (word.indexOf(words[guessCount].letter2) >= 0) {
      tempColors[guessCount][1] = "yellow";
    } else {
      tempColors[guessCount][1] = "grey";
    }

    if (word[2] === words[guessCount].letter3) {
      tempColors[guessCount][2] = "green";
    } else if (word.indexOf(words[guessCount].letter3) >= 0) {
      tempColors[guessCount][2] = "yellow";
    } else {
      tempColors[guessCount][2] = "grey";
    }

    if (word[3] === words[guessCount].letter4) {
      tempColors[guessCount][3] = "green";
    } else if (word.indexOf(words[guessCount].letter4) >= 0) {
      tempColors[guessCount][3] = "yellow";
    } else {
      tempColors[guessCount][3] = "grey";
    }

    if (word[4] === words[guessCount].letter5) {
      tempColors[guessCount][4] = "green";
    } else if (word.indexOf(words[guessCount].letter5) >= 0) {
      tempColors[guessCount][4] = "yellow";
    } else {
      tempColors[guessCount][4] = "grey";
    }

    // if (word[1] === words[guessCount].letter2) {
    //   this.setState({ color2: "green" });
    // } else if (word.indexOf(words[guessCount].letter2) >= 0) {
    //   this.setState({ color2: "yellow" });
    // } else this.setState({ color2: "grey" });

    // if (word[2] === words[guessCount].letter3) {
    //   this.setState({ color3: "green" });
    // } else if (word.indexOf(words[guessCount].letter3) >= 0) {
    //   this.setState({ color3: "yellow" });
    // } else this.setState({ color3: "grey" });

    // if (word[3] === words[guessCount].letter4) {
    //   this.setState({ color4: "green" });
    // } else if (word.indexOf(words[guessCount].letter4) >= 0) {
    //   this.setState({ color4: "yellow" });
    // } else this.setState({ color4: "grey" });

    // if (word[4] === words[guessCount].letter5) {
    //   this.setState({ color5: "green" });
    // } else if (word.indexOf(words[guessCount].letter5) >= 0) {
    //   this.setState({ color5: "yellow" });
    // } else this.setState({ color5: "grey" });

    this.setState({
      colors: tempColors,
      guessCount: this.state.guessCount + 1,
    });
  };

  render() {
    const {
      monsters,
      searchField,
      words,
      guessCount,
      word,
      color1,
      color2,
      color3,
      color4,
      color5,
      colors,
    } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        {/* <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"search monsters"}
          handleChange={this.searchHandler}
        />
        <CardList items={filteredMonsters}></CardList> */}
        <CardList
          items={words}
          guessCount={guessCount}
          word={word}
          onSubmit={this.submitHandler}
          color1={color1}
          color2={color2}
          color3={color3}
          color4={color4}
          color5={color5}
          colors={colors}
        ></CardList>
      </div>
    );
  }
}

export default App;
