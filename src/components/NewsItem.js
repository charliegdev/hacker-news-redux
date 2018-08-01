import React from "react";
import PropTypes from 'prop-types';

const NewsItem = props => {
  const { title, url, author, num_comments, points } = props;
  return (
    <tr>
      <th scope="row"><a href={url}>{title}</a></th> 
      <td>{author}</td>
      <td>{num_comments}</td>
      <td>{points}</td>
    </tr>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired
};

export default NewsItem;