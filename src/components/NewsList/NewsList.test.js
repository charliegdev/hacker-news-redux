import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NewsList from "./NewsList";

Enzyme.configure({ adapter: new Adapter() });

describe("NewsList", () => {
  const mockFunc = () => "mockFunc";
  const props = {
    list: [
      { title: "1", author: "1", num_comments: 1, points: 2, objectID: "abc" },
      { title: "2", author: "2", num_comments: 2, points: 3, objectID: "xyz" },
    ],
    deleteFunc: mockFunc,
    sortKey: "none",
    onSort: mockFunc,
    isSortReverse: false
  }

  const newsList = <NewsList {...props} />;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(newsList, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(newsList);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows 2 items", () => {
    const element = render(newsList); // can't use shallow because I need child components to be rendered
    expect(element.find(".red")).toHaveLength(2);
  });
});
