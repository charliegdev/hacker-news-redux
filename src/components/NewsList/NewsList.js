import React from "react";
import PropTypes from 'prop-types';
import NewsItem from "../NewsItem/NewsItem";
import { withSort } from "../HOC/HOC";
import sort from "../../utils/sort";

const NewsList = ({ list, deleteFunc, sortKey, onSort }) => {
  const ButtonWithSort = withSort(onSort);

  return (
    <table className="ui celled striped table">
      <thead className="thead-dark">
        <tr>
          <th>Title <ButtonWithSort sortKey="byTitle" /></th>
          <th>Author <ButtonWithSort sortKey="byAuthor" /></th>
          <th>Comments <ButtonWithSort sortKey="byCommentsDesc" /></th>
          <th>Points <ButtonWithSort sortKey="byPointsDesc" /></th>
          <th>Operation</th>
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