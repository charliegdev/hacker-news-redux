import React, { Component } from 'react';
import list from "./components/local-data";
import NewsList from "./components/NewsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list
    };
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(objectID) {
    const { list } = this.state;
    const newList = list.filter(item => item.objectID !== objectID);
    this.setState({list: newList});
  }

  render() {
    return (
      <div className="App">
        <br />
        <h1 className="text-center">Hacker News Redux</h1>
        <br />
        <NewsList list={this.state.list} deleteFunc={this.onDelete} />
      </div>
    );
  }
}

export default App;
