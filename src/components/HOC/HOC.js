/* eslint react/prop-types: 0 */
/* eslint react/display-name: 0 */
// Disabled those rules for these higher order components
import React from "react";
import Loading from "../Loading/Loading";
import Sort from "../Sort/Sort";

const withLoading = Component => ({ loading, ...rest }) => 
  loading ? <Loading /> : <Component { ...rest } />

// <th scope="col">Title <Sort sortKey="byTitle" onSort={onSort}>Sort</Sort></th>

const withSort = onSort => ({ sortKey }) =>
  <Sort sortKey={sortKey} onSort={onSort}>Sort</Sort>

export { withLoading, withSort };