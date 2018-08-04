import React from "react";
import PropTypes from "prop-types";

const SearchField = ({ onSubmitFunc, onChangeFunc, searchValue, children = "Search" }) =>
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
            />
            <small id="searchFieldHelp" className="form-text text-muted">
              Searching for remote news
            </small>
          </div>
        </form>
      </div>
    </div>
    <br />
  </div>

SearchField.propTypes = {
  onChangeFunc: PropTypes.func.isRequired,
  onSubmitFunc: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  children: PropTypes.string
};

export default SearchField;
