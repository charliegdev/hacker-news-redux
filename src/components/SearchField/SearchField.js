import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchField extends Component {
  componentDidMount() {
    if (this.input) this.input.focus();
  }

  render() {
    const { onSubmitFunc, onChangeFunc, searchValue, children = "Search" } = this.props;
    return (
      <div>
        <div className="card card-body">
          <form onSubmit={onSubmitFunc}>
            <div className="form-group">
              <label htmlFor="searchField">Search a Title</label>
              <input
                type="text"
                className="form-control"
                id="searchField"
                placeholder="Enter part of a title"
                value={searchValue}
                onChange={event => onChangeFunc(event.target.value)}
                ref={node => this.input = node}
              />
              <small id="searchFieldHelp" className="form-text text-muted">
                Searching for remote news
              </small>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {children}
            </button>
          </form>
        </div>
        <br />
      </div>
    );
  }
} 

SearchField.propTypes = {
  onChangeFunc: PropTypes.func.isRequired,
  onSubmitFunc: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  children: PropTypes.string
};

export default SearchField;
