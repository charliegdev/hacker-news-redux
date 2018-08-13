import React from "react";
import Loading from "../Loading/Loading";

const withLoading = Component => ({ loading, ...rest }) => 
  loading ? <Loading /> : <Component { ...rest } />

export default withLoading;