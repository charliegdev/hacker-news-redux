import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = { searchValue: "" };

    this.onSearchFieldChange = this.onSearchFieldChange.bind(this);
  }

  onSearchFieldChange(event) {
    const newSearchValue = event.target.value;
    this.setState({ searchValue: newSearchValue });
    this.props.onChangeFunc(newSearchValue);
  }

  render() {
    const { onSubmitFunc, children } = this.props;
    return (
      <div>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {children}
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <form onSubmit={onSubmitFunc} onChange={this.onSearchFieldChange}>
              <div className="form-group">
                <label htmlFor="searchField">Search a Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="searchField"
                  placeholder="Enter part of a title"
                  value={this.state.searchValue}
                />
                <small id="searchFieldHelp" className="form-text text-muted">
                  Searching for locally cached news
                </small>
              </div>
            </form>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

SearchField.propTypes = {
  onChangeFunc: PropTypes.func.isRequired,
  onSubmitFunc: PropTypes.func.isRequired
};

export default SearchField;
