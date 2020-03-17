import React, { Component } from "react";
import Child from "./Child";
import "./App.css";
export class App extends Component {
  state = {
    names: [
      { id: 1, name: "fatma", job: "software Engineer", age: 24 },
      {
        id: 2,
        name: "wafi",
        job: "front-end Engineer",
        age: 28
      },
      {
        id: 3,
        name: "asma",
        job: "psychologist",
        age: 23
      }
    ]
  };

  changeName = () => {
    let newName = [...this.state.names];
    newName[0].name = "khan";
    this.setState({ names: newName });
  };

  render() {
    return (
      <div className="App">
        {this.state.names.map(name => (
          <Child
            key={name.id}
            names={name.name}
            occ={name.job}
            age={name.age}
          />
        ))}
        <button onClick={this.changeName}> change name </button>
      </div>
    );
  }
}

export default App;
