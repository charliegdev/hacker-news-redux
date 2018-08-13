import React from "react";
import PropTypes from 'prop-types';
import NewsItem from "../NewsItem/NewsItem";
import { withSort } from "../HOC/HOC";
import sort from "../../utils/sort";

const NewsList = ({ list, deleteFunc, sortKey, onSort }) => {
  const ButtonWithSort = withSort(onSort);

  return (
    <table className="table table-bordered table-hover table-sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Title <ButtonWithSort sortKey="byTitle" /></th>
          <th scope="col">Author <ButtonWithSort sortKey="byAuthor" /></th>
          <th scope="col">Comments <ButtonWithSort sortKey="byCommentsDesc" /></th>
          <th scope="col">Points <ButtonWithSort sortKey="byPointsDesc" /></th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        {sort[sortKey](list).map(({ title, url, author, num_comments, points, objectID }) => 
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
  );
}

NewsList.propTypes = {
  list: PropTypes.array.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired
};

export default NewsList;