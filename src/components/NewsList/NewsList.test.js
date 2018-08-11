import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NewsList from "./NewsList";

describe("NewsList", () => {
  const mockFunc = () => "mockFunc";
  const props = {
    list: [
      { title: "1", author: "1", num_comments: 1, points: 2, objectID: "abc" },
      { title: "2", author: "2", num_comments: 2, points: 3, objectID: "xyz" },
    ],
    deleteFunc: mockFunc
  }

  const mockNewsList = <NewsList {...props} />;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(mockNewsList, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(mockNewsList);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
