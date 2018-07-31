import React from "react";
import PropTypes from 'prop-types';

const NewsItem = props => {
  const { title, url, author, num_comments, points, objectID } = props;
  return (
    <li className="list-group-item">
      <span><a href={url}>{title}</a></span> by <span>{author}</span>&nbsp;
      <span>{num_comments}</span>&nbsp;
      <span>{points}</span>&nbsp;
    </li>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  objectID: PropTypes.number.isRequired,
};

export default NewsItem;