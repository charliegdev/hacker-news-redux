import React from "react";
import PropTypes from 'prop-types';

const NewsItem = props => {
  const { title, url, author, num_comments, points, deleteFunc, objectID } = props;
  return (
    <tr>
      <th scope="row"><a href={url}>{title}</a></th> 
      <td>{author}</td>
      <td>{num_comments}</td>
      <td>{points}</td>
      <td>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={deleteFunc.bind(undefined, objectID)}>Delete</button>
      </td>
    </tr>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  objectID: PropTypes.number.isRequired
};

export default NewsItem;