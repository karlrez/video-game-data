import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBar from "../SearchBar/SearchBar";
import Games from "./Games";
import RadioButtons from "./../RadioButtons/RadioButtons";
import LoadMoreBtn from "./../LoadMoreBtn/LoadMoreBtn";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = mount(<Games />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("Games", () => {
  it("Renders SearchBar component", () => {
    expect(wrapper.containsMatchingElement(<SearchBar />)).toEqual(true);
  });

  it("Renders RadioButtons component", () => {
    expect(wrapper.containsMatchingElement(<RadioButtons />)).toBeTruthy();
  });

  it("Renders loading Spinner", () => {
    expect(wrapper.find(".spinner").exists()).toBeTruthy();
  });

  it("Doesnt render LoadMoreBtn", () => {
    // Load more should show after api response
    expect(wrapper.containsMatchingElement(<LoadMoreBtn />)).toEqual(false);
  });

  it("Year button is highlighted", () => {
    expect(
      wrapper.find("#first").hasClass("radio-button--highlight")
    ).toBeTruthy();
  });

  it("Sales btn highlighted after click", () => {
    wrapper.find("#second").simulate("click");
    wrapper.update();
    expect(
      wrapper.find("#second").hasClass("radio-button--highlight")
    ).toBeTruthy();
  });

  it("ReviewScore btn highlighted after click", () => {
    wrapper.find("#third").simulate("click");
    wrapper.update();
    expect(
      wrapper.find("#third").hasClass("radio-button--highlight")
    ).toBeTruthy();
  });

  it("Arrow button is pointing up", () => {
    expect(wrapper.find("#arrowBtn").hasClass("arrowDown")).toEqual(false);
  });

  it("Arrow button is pointing down after click", () => {
    wrapper.find("#arrowBtnImage").simulate("click");
    wrapper.update();
    expect(wrapper.find("#arrowBtn").hasClass("arrowDown")).toBeTruthy();
  });

  /*
  // TODO: Figure out how to await until response from api
  it("Renders Game components", async () => {
    await act(async () => {
      await Promise.resolve(wrapper);
      await new Promise((resolve) => setImmediate(resolve));

      wrapper.update();
      expect(wrapper.containsMatchingElement(<Game />)).toEqual(true);
    });
  });
  */
});
