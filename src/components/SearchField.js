import React from "react";
import PropTypes from "prop-types";

const SearchField = props => {
  const { onChangeFunc } = props;
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
          Search
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <form>
            <div className="form-group">
              <label htmlFor="searchField">Search a Title</label>
              <input
                type="text"
                className="form-control"
                id="searchField"
                placeholder="Enter part of a title"
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
};

export default SearchField;
