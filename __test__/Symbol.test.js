import React from "react";
import { render } from "@testing-library/react-native";

import Symbol from "../src/components/Symbol";

let component;

describe("<Symbol />", () => {
  beforeEach(() => {
    component = render(<Symbol />);
  });

  it("Render correctly the Symbol component", () => {
    expect(component).toBeDefined();
  });
});
