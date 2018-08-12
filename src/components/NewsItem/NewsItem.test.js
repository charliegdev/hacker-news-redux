import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NewsItem from "./NewsItem";

Enzyme.configure({ adapter: new Adapter() });

describe("NewsItem", () => {
  const mockFunc = () => "mockFunc";
  const newsItem = <NewsItem
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
    ReactDOM.render(newsItem, tbody);
    ReactDOM.unmountComponentAtNode(tbody);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(newsItem);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders all table cell", () => {
    const element = shallow(newsItem);
    expect(element.find("td")).toHaveLength(4);
  });
});
