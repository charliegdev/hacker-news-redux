import React from "react";
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const NewsList = props => {
  const { list } = props;

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Comments</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => {
          const { title, url, author, num_comments, points, objectID } = item;
          return <NewsItem 
            key={objectID} 
            title={title} 
            url={url} 
            author={author} 
            num_comments={num_comments} 
            points={points} 
          />
        })}
      </tbody>
    </table>
  )
}

NewsList.propTypes = {
  list: PropTypes.array.isRequired
};

export default NewsList;