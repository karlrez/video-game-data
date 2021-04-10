import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OpenButton from "./OpenButton";

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<OpenButton />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("Game component", () => {
  it("Matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
