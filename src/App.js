import React, { Component } from "react";
import axios from "axios";
import NewsList from "./components/NewsList/NewsList";
import SearchField from "./components/SearchField/SearchField";
import Button from "./components/Button/Button";
import { withLoading } from "./components/HOC/HOC";
import { DEFAULT_QUERY, PATH_BASE, PATH_SEARCH, PARAM_SEARCH, PAGE } from "./utils/network";

const ButtonWithLoading = withLoading(Button);

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      list: undefined, // actual list. Affected by deletion.
      query: DEFAULT_QUERY, // this gets updated every time user types something in the search field
      finalQuery: DEFAULT_QUERY, // this gets sent to the API server. The current keyword.
      error: null,
      loading: false,
      sortKey: "none"
    };
    this.onDelete = this.onDelete.bind(this);
    this.onSearchComplete = this.onSearchComplete.bind(this);
    this.onSearchUpdate = this.onSearchUpdate.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  onDelete(objectID) {
    const { list, finalQuery } = this.state;
    const { hits, page } = list[finalQuery];

    const remainingHits = hits.filter(item => item.objectID !== objectID);

    this.setState({
      list: {
        ...list,
        [finalQuery]: {
          hits: remainingHits,
          page
        }
      }
    });
  }

  onSearchUpdate(newSearchValue) {
    this.setState({ query: newSearchValue });
  }

  onSearchComplete(event) {
    event.preventDefault();
    this.searchNews();
  }

  onSort(sortKey) {
    this.setState({ sortKey });
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
          this._isMounted && 
          this.setState({
            list: {
              ...list,
              [finalQuery]: {
                hits: response.data.hits,
                page: 0 // If this is a new search, page must be 0.
              }
            },
            loading: false
          });
        })
        .catch(error => this._isMounted && this.setState({ error }));
    };

    this.setState({ 
      finalQuery: this.state.query.toLowerCase(), 
      loading: true
    }, searchUsingKeyword);
  }

  loadNextPage() {
    this.setState({ loading: true });
    const { list, finalQuery } = this.state;
    const oldHits = list[finalQuery].hits;
    const nextPage = list[finalQuery].page + 1;

    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${finalQuery}&${PAGE}${nextPage}`;
    axios
      .get(url)
      .then(response => {
        this._isMounted && 
        this.setState({
          list: {
            ...list,
            [finalQuery]: {
              hits: [...oldHits, ...response.data.hits],
              page: nextPage // If this is a new search, page must be 0.
            }
          },
          loading: false
        });
      })
      .catch(error => this._isMounted && this.setState({ error }));
  }

  componentDidMount() {
    this._isMounted = true;
    this.searchNews();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { list, query, finalQuery, error, loading, sortKey } = this.state;
    return (
      <div className="App">
        <br />
        <h1 className="ui header center aligned">Hacker News Redux</h1>
        <br />
        <SearchField
          onSubmitFunc={this.onSearchComplete}
          onChangeFunc={this.onSearchUpdate}
          searchValue={query}
          loading={loading}
        >
          Search for an article
        </SearchField>

        {error && <p>Oops! Something went wrong.</p>}
        {list && list[finalQuery] && 
          <NewsList 
            list={list[finalQuery].hits} 
            deleteFunc={this.onDelete} 
            sortKey={sortKey}
            onSort={this.onSort}
          />
        }
        <ButtonWithLoading loading={loading} semantic="green" onClick={this.loadNextPage}>More!</ButtonWithLoading>
        <br />
        <br />
      </div>
    );
  }
}


export default App;

