import { render, screen } from '@testing-library/react';
import { configure, shallow } from "enzyme";
import App from './App';

describe("Counter Testing", () => {
  test('renders learn react link', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is counter app");

    // const { getbyText } = render(<App />);
    // const linkElement = screen.getByText("This is counter app");
    // expect(linkElement).toBeInTheDocument();
  });

  test("render a button with text of `increment`", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  })
})

