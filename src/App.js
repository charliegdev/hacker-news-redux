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
      list: undefined, // actual list. Affected by deletion.
      query: DEFAULT_QUERY,
      page: 0
    };
    this.onDelete = this.onDelete.bind(this);
    this.onSearchComplete = this.onSearchComplete.bind(this);
    this.onSearchUpdate = this.onSearchUpdate.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
  }

  onDelete(objectID) {
    const { list } = this.state;
    const { hits } = list;

    const remainingHits = hits.filter(item => item.objectID !== objectID);
    const remainingList = { ...list, hits: remainingHits };

    this.setState({ list: remainingList });
  }

  onSearchUpdate(newSearchValue) {
    this.setState({ query: newSearchValue });
  }

  onSearchComplete(event) {
    event.preventDefault();
    this.searchNews();
  }

  searchNews() {
    const { query, page } = this.state;
    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${query}&page=${page}`;
    axios.get(url)
      .then(response => this.setState({ list: response.data }))
      .catch(error => console.error("network error."));
  }

  loadNextPage() {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage }, this.searchNews);
  }

  componentDidMount() {
    this.searchNews();
  }

  render() {
    const { list, query } = this.state;
    return (
      <div className="App">
        <br />
        <h1 className="text-center">Hacker News Redux</h1>
        <br />
        <SearchField
          onSubmitFunc={this.onSearchComplete}
          onChangeFunc={this.onSearchUpdate}
          searchValue={query}
        >
          Search for an article
        </SearchField>

        {list && <NewsList list={this.state.list.hits} deleteFunc={this.onDelete} />}
        {list && <button className="btn btn-success" onClick={this.loadNextPage}>More!</button>}
        <br />
        <br />
      </div>
    );
  }
}

export default App;
