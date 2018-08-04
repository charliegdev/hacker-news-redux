import React, { Component } from "react";
import NewsList from "./components/NewsList";
import SearchField from "./components/SearchField";
import axios from "axios";

// Constants for network querying. Probably should put them in another file.
const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : undefined, // actual list. Affected by deletion.
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

  componentDidMount() {
    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
    axios.get(url)
     .then(response => this.setState({ list: response.data }))
     .catch(error => console.log(error));
  }

  render() {
    const { list } = this.state;
    if (!list) return null;
    return (
      <div className="App">
        <br />
        <h1 className="text-center">Hacker News Redux</h1>
        <br />
        <SearchField
          onSubmitFunc={this.onSearchComplete}
          onChangeFunc={this.onSearchUpdate}
        >
          Search for an article
        </SearchField>
        
        <NewsList list={this.state.list.hits} deleteFunc={this.onDelete} />
      </div>
    );
  }
}

export default App;
