import React from "react";
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const NewsList = props => {
  const { list } = props;

  return (
    <ul className="list-group">
      {list.map(item => {
        const { title, url, author, num_comments, points, objectID } = item;
        return (
          <NewsItem 
            key={objectID}
            title={title}
            url={url}     
            author={author}
            num_comments={num_comments} 
            points={points}
            objectID={objectID}
          />
        );
      })}
    </ul>
  )
}

NewsList.propTypes = {
  list: PropTypes.array.isRequired
};

export default NewsList;