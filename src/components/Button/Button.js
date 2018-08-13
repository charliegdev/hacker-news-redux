import React from "react";
import PropTypes from 'prop-types';

// <button className="btn btn-success" onClick={this.loadNextPage}>More!</button>
const Button = ({ onClick, children, semantic = "primary" }) => 
  <button className={"btn btn-" + semantic} onClick={onClick}>{children}</button>

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  semantic: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default Button;