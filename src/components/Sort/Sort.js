import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Sort = ({ sortKey, activeSortKey, onSort, isSortReverse, children = "Sort by this column" }) => {
  const semantic = activeSortKey !== sortKey ?
    "primary basic" :
    isSortReverse ?
      "violet" : "primary";

  return <Button onClick={onSort.bind(undefined, sortKey)} semantic={semantic}>{children}</Button>;
}

Sort.propTypes = {
  sortKey: PropTypes.string.isRequired,
  activeSortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  children: PropTypes.string,
  isSortReverse: PropTypes.bool.isRequired
};

export default Sort;
