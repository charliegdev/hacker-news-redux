import React, { Component } from 'react';
import list from "./components/local-data";
import NewsList from "./components/NewsList";
import SearchField from "./components/SearchField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list
    };
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(objectID) {
    const newList = this.state.list.filter(item => item.objectID !== objectID);
    this.setState({list: newList});
  }

  render() {
    return (
      <div className="App">
        <br />
        <h1 className="text-center">Hacker News Redux</h1>
        <br />
        <SearchField />
        <NewsList list={this.state.list} deleteFunc={this.onDelete} />
      </div>
    );
  }
}

export default App;
