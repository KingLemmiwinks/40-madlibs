import React from "react";
import { render } from "@testing-library/react";
import MadLibStory from "./MadLibStory";

it("will render without crashing", () => {
  render(<MadLibStory />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<MadLibStory />);
  expect(asFragment()).toMatchSnapshot();
});
