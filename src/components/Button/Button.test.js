import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {

  const mockFunc = () => console.log("mock");
  const button = <Button onClick={mockFunc} semantic="primary">Click!</Button>;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(button, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(button);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  /*
  it("shows 2 items", () => {
    const element = shallow(button); // can't use shallow because I need child components to be rendered
    expect(element.find(".btn-outline-danger")).toHaveLength(2);
  });
  */
});
