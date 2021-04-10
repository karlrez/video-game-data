import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBar from "./SearchBar";

configure({ adapter: new Adapter() });

let wrapper;
const props = { placeholder: "test placeholder" };
beforeEach(() => {
  wrapper = shallow(<SearchBar props={props} />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("SearchBar component", () => {
  it("Matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
