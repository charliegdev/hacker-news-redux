import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Sort = ({ sortKey, onSort, children = "Sort by this column" }) => 
  <Button onClick={onSort.bind(undefined, sortKey)} semantic="primary">{children}</Button>

Sort.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  children: PropTypes.string
}

export default Sort;