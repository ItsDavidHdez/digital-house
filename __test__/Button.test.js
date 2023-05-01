import React from "react";
import { render } from "@testing-library/react-native";

import Button from "../src/components/Button";

let component;

describe("<Button />", () => {
  beforeEach(() => {
    component = render(<Button />);
  });

  it("Render correctly the Button component", () => {
    expect(component).toBeDefined();
    expect(component.queryByTestId("button-component")).toBeDefined();
  });
});
