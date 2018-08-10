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
      query: DEFAULT_QUERY, // this gets updated every time user types something in the search field
      finalQuery: DEFAULT_QUERY // this gets sent to the API server.
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
    const searchUsingKeyword = () => {
      const { finalQuery, list } = this.state;
      // Already cached. Don't search.
      if (list && list[finalQuery]) return;

      // Didn't cache. Search.
      const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${finalQuery}`;
      axios
        .get(url)
        .then(response => {
          this.setState({ list: { 
            ...list,
            [finalQuery]: { 
              hits: response.data.hits, 
              page: 0 // If this is a new search, page must be 0.
            } 
          }});
        })
        .catch(error => console.error("network error."));
    };

    this.setState({ finalQuery: this.state.query.toLowerCase() }, searchUsingKeyword);
  }

  loadNextPage() {
    const { list, finalQuery } = this.state;
    const oldHits = list[finalQuery].hits;
    const nextPage = list[finalQuery].page + 1;

    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${finalQuery}&page=${nextPage}`;
    axios
      .get(url)
      .then(response => {
        this.setState({ list: { 
          ...list,
          [finalQuery]: { 
            hits: [...oldHits, ...response.data.hits],
            page: nextPage // If this is a new search, page must be 0.
          } 
        }});
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.searchNews();
  }

  render() {
    const { list, query, finalQuery } = this.state;
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

        {list &&
          list[finalQuery] && (
            <NewsList list={list[finalQuery].hits} deleteFunc={this.onDelete} />
          )}
        {list &&
          list[finalQuery] && (
            <button className="btn btn-success" onClick={this.loadNextPage}>
              More!
            </button>
          )}
        <br />
        <br />
      </div>
    );
  }
}

export default App;
