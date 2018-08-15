import React from "react";
import PropTypes from 'prop-types';
import NewsItem from "../NewsItem/NewsItem";
import { withSort } from "../HOC/HOC";
import sort from "../../utils/sort";

const NewsList = ({ list, deleteFunc, sortKey, onSort, isSortReverse }) => {
  const ButtonWithSort = withSort(onSort);
  const sortedListInProgress = sort[sortKey](list);
  const sortedList = isSortReverse ? sortedListInProgress.reverse() : sortedListInProgress;

  return (
    <table className="ui celled striped table">
      <thead className="thead-dark">
        <tr>
          <th><ButtonWithSort sortKey="byTitle">Title</ButtonWithSort></th>
          <th><ButtonWithSort sortKey="byAuthor">Author</ButtonWithSort></th>
          <th><ButtonWithSort sortKey="byCommentsDesc">Comments</ButtonWithSort></th>
          <th><ButtonWithSort sortKey="byPointsDesc">Points</ButtonWithSort></th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {sortedList.map(({ title, url, author, num_comments, points, objectID }) => 
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
  onSort: PropTypes.func.isRequired,
  isSortReverse: PropTypes.bool.isRequired
};

export default NewsList;