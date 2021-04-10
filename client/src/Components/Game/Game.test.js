import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Game from "./Game";

configure({ adapter: new Adapter() });

const gameData = {
  Title: "test title",
  YearReleased: 2021,
  ["US Sales (millions)"]: 100,
  ["Review Score"]: 8.8,
  Usedprice: 5,
  Console: "Playstation",
  Genre: "Action",
  Publisher: "Nintendo",
};

let wrapper;
beforeEach(() => {
  wrapper = mount(<Game gameData={gameData} />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("Game component", () => {
  it("Matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Test Title", () => {
    expect(wrapper.find("#title").text().includes("test title")).toBeTruthy();
  });

  it("Test YearReleased", () => {
    expect(wrapper.find("#year-released").text().includes(2021)).toBeTruthy();
  });

  it("Test Review Score", () => {
    expect(wrapper.find("#review-score").text().includes(8.8)).toBeTruthy();
  });

  it("Test US Sales (millions)", () => {
    expect(wrapper.find("#sales").text().includes(100)).toBeTruthy();
  });

  // This info should not be shown yet
  it("Test Usedprice not showing", () => {
    expect(wrapper.find("#used-price").exists()).toEqual(false);
  });

  it("Test Console not showing", () => {
    expect(wrapper.find("#console").exists()).toEqual(false);
  });

  it("Test Genre not showing", () => {
    expect(wrapper.find("#genre").exists()).toEqual(false);
  });

  it("Test Game Rating not showing", () => {
    expect(wrapper.find("#rating").exists()).toEqual(false);
  });

  it("Test Publisher not showing", () => {
    expect(wrapper.find("#publisher").exists()).toEqual(false);
  });

  // This info is shown after clicking plus icon
  it("Test Usedprice", () => {
    wrapper.find("#open-btn").simulate("click");
    wrapper.update();
    expect(wrapper.find("#used-price").text().includes(5)).toBeTruthy();
  });

  it("Test Console", () => {
    wrapper.find("#open-btn").simulate("click");
    wrapper.update();
    expect(
      wrapper.find("#console").text().includes("Playstation")
    ).toBeTruthy();
  });

  it("Test Genre", () => {
    wrapper.find("#open-btn").simulate("click");
    wrapper.update();
    expect(wrapper.find("#genre").text().includes("Action")).toBeTruthy();
  });

  it("Test Game Rating", () => {
    wrapper.find("#open-btn").simulate("click");
    wrapper.update();
    expect(wrapper.find("#rating").text().includes("N/A")).toBeTruthy();
  });

  it("Test Publisher", () => {
    wrapper.find("#open-btn").simulate("click");
    wrapper.update();
    expect(wrapper.find("#publisher").text().includes("Nintendo")).toBeTruthy();
  });

  it("Open and close subdiv", () => {
    wrapper.find("#open-btn").simulate("click");
    wrapper.find("#open-btn").simulate("click");
    expect(wrapper.find("#subdiv").exists()).toEqual(false);
  });
});
