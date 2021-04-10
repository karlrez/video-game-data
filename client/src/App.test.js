import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Games from "./Components/Games/Games";

configure({ adapter: new Adapter() });

let wrapper;
beforeAll(() => {
  wrapper = shallow(<App />);
});

afterAll(() => {
  wrapper.unmount();
});

describe("App component", () => {
  it("Matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders Games component", () => {
    expect(wrapper.containsMatchingElement(<Games />)).toEqual(true);
  });
});
