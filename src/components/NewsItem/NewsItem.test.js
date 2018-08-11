import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import NewsItem from "./NewsItem";

describe("NewsItem", () => {
  const mockFunc = () => "mockFunc";
  const mockNewsItem = <NewsItem
    title="Test Title"
    url="https://google.ca"
    author="James Cameron"
    num_comments={10}
    points={3}
    deleteFunc={mockFunc}
    objectID="abcdefghi"
  />
  it("renders without crashing", () => {
    const tbody = document.createElement("tbody");
    ReactDOM.render(mockNewsItem, tbody);
    ReactDOM.unmountComponentAtNode(tbody);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(mockNewsItem);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
