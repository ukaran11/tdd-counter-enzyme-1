import { render, screen } from '@testing-library/react';
import { configure, shallow } from "enzyme";
import App from './App';

describe("Counter Testing", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders learn react link', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
})

