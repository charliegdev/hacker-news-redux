import React from "react";
import PropTypes from 'prop-types';

const NewsItem = ({ title, url, author, num_comments, points, deleteFunc, objectID }) =>
  <tr>
    <th scope="row"><a href={url} target="_blank">{title}</a></th> 
    <td>{author}</td>
    <td>{num_comments}</td>
    <td>{points}</td>
    <td>
      <button type="button" className="btn btn-outline-danger btn-sm" onClick={deleteFunc.bind(undefined, objectID)}>Delete</button>
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