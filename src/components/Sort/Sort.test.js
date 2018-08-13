import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./Sort";

Enzyme.configure({ adapter: new Adapter() });

describe("Sort", () => {

  const sort = <Sort onSort={() => console.log("test")} sortKey="none" />;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(sort, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(sort);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
