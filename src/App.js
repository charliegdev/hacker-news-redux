import React, { Component } from "react";
import list from "./components/local-data";
import NewsList from "./components/NewsList";
import SearchField from "./components/SearchField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list, // actual list. Affected by deletion.
      displayedList: list // displayed list. Affected by searching and deletion.
    };
    this.onDelete = this.onDelete.bind(this);
    this.onSearchComplete = this.onSearchComplete.bind(this);
    this.onSearchUpdate = this.onSearchUpdate.bind(this);
  }

  onDelete(objectID) {
    const { list, displayedList } = this.state;
    const matchObjectID = item => item.objectID !== objectID;

    const remainingList = list.filter(matchObjectID);
    const remainingDisplayedList = displayedList.filter(matchObjectID);

    this.setState({ 
      list: remainingList,
      displayedList: remainingDisplayedList
    });
  }

  onSearchUpdate(newSearchValue) {
    const filteredList = this.state.list.filter(item =>
      item.title.toLowerCase().includes(newSearchValue.toLowerCase())
    );
    this.setState({ displayedList: filteredList });
  }

  onSearchComplete(event) {
    // currently we don't need to do anything.
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <br />
        <h1 className="text-center">Hacker News Redux</h1>
        <br />
        <SearchField
          onSubmitFunc={this.onSearchComplete}
          onChangeFunc={this.onSearchUpdate}
        />
        <NewsList list={this.state.displayedList} deleteFunc={this.onDelete} />
      </div>
    );
  }
}

export default App;
