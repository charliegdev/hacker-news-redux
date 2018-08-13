import { sortBy } from "lodash";

const sort = {
  none: list => list,
  byTitle: list => sortBy(list, "title"),
  byAuthor: list => sortBy(list, "author"),
  byCommentsDesc: list => sortBy(list, "num_comments").reverse(),
  byPointsDesc: list => sortBy(list, "points").reverse()
};

export default sort;