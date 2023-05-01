import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../src/screens/Home";

let component;

describe("<Home />", () => {
  beforeEach(() => {
    component = render(<Home />);
  });

  it("Render correctly the Home screen", () => {
    expect(component).toBeDefined();
    expect(component.queryAllByTestId("elements-container").length).toEqual(1);
  });
});
