import React, { Component } from 'react';
import list from "./components/local-data";
import NewsList from "./components/NewsList";

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
        <br />
        <h1 className="text-center">Hacker News Redux</h1>
        <br />
        <NewsList list={list} />
      </div>
    );
  }
}

export default App;
