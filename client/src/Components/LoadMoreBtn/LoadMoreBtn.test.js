import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoadMoreBtn from "./LoadMoreBtn";

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<LoadMoreBtn />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("LoadMoreBtn component", () => {
  it("Matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Correct text", () => {
    expect(wrapper.find(".load-more-btn").text()).toEqual("Load More");
  });
});
