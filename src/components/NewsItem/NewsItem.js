import React from "react";
import PropTypes from 'prop-types';
import Button from "../Button/Button";

const NewsItem = ({ title, url, author, num_comments, points, deleteFunc, objectID }) =>
  <tr>
    <td><a href={url} target="_blank">{title}</a></td> 
    <td>{author}</td>
    <td>{num_comments}</td>
    <td>{points}</td>
    <td>
      <Button onClick={deleteFunc.bind(undefined, objectID)} semantic="red tiny">Delete</Button>
    </td>
  </tr>

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  objectID: PropTypes.string.isRequired
};

export default NewsItem;