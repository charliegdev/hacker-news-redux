import React from "react";
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const NewsList = ({ list, deleteFunc }) => 
  <table className="table table-bordered table-hover table-sm">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Author</th>
        <th scope="col">Comments</th>
        <th scope="col">Points</th>
        <th scope="col">Operation</th>
      </tr>
    </thead>
    <tbody>
      {list.map(({ title, url, author, num_comments, points, objectID }) => 
        <NewsItem 
          key={objectID} 
          title={title} 
          url={url} 
          author={author} 
          num_comments={num_comments} 
          points={points} 
          objectID={objectID}
          deleteFunc={deleteFunc}
        />
      )}
    </tbody>
  </table>

NewsList.propTypes = {
  list: PropTypes.array.isRequired,
  deleteFunc: PropTypes.func.isRequired
};

export default NewsList;