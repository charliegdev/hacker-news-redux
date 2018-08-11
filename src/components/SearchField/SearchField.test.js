import React from "React";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SearchField from "./SearchField";

describe("SearchField", () => {
  const mockFunc = () => "mockFunc";
  const mockSearchField = <SearchField
    onChangeFunc={mockFunc}
    onSubmitFunc={mockFunc}
    searchValue="mock search value"
  >
    Search for Something
  </SearchField>;
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(mockSearchField, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(mockSearchField);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
