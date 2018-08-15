/* eslint react/prop-types: 0 */
/* eslint react/display-name: 0 */
// Disabled those rules for these higher order components
import React from "react";
import Loading from "../Loading/Loading";
import Sort from "../Sort/Sort";

const withLoading = Component => ({ loading, ...rest }) => 
  loading ? <Loading /> : (<div><Component { ...rest } /><br /></div>)

const withSort = onSort => ({ sortKey, children }) =>
  <Sort sortKey={sortKey} onSort={onSort}>{children}</Sort>

export { withLoading, withSort };