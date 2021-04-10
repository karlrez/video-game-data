import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RadioButtons from "./RadioButtons";

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<RadioButtons />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("RadioButtons component", () => {
  it("Matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Year btn has correct text", () => {
    expect(wrapper.find("#first").text()).toEqual("Year");
  });

  it("Sales btn has correct text", () => {
    expect(wrapper.find("#second").text()).toEqual("Sales");
  });

  it("Review score btn has correct text", () => {
    expect(wrapper.find("#third").text()).toEqual("Review Score");
  });
});
