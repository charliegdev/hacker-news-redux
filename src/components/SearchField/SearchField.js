import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchField extends Component {
  componentDidMount() {
    if (this.input) this.input.focus();
  }

  render() {
    const { onSubmitFunc, onChangeFunc, searchValue, loading = true, children = "Search for a topic" } = this.props;
    return (
      <div>
        <div className="ui segment">
          <form onSubmit={onSubmitFunc}>
            <h3 className="ui header">{children}</h3>
            <div className={"ui search" + (loading ? " loading" : "")}>
              <div className="ui icon input">
                <input 
                  className="prompt" 
                  placeholder="Search for a title..." 
                  type="text" 
                  value={searchValue}
                  onChange={event => onChangeFunc(event.target.value)}
                  ref={node => this.input = node}
                />
                <i className="search icon"></i>
              </div>
              <div className="results"></div>
            </div>
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
  children: PropTypes.string,
  loading: PropTypes.boolean
};

export default SearchField;
