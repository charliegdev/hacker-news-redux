import React, { Component } from 'react';
import list from "./components/local-data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="text-center">Hacker News Redux</h1>
        <ul className="list-group">
          {this.state.list.map(item => <li className="list-group-item" key={item.objectID}>{item.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
