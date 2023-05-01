import React from "react";
import { render } from "@testing-library/react-native";

import Product from "../src/screens/Product";

let component;

describe("<Product />", () => {
  beforeEach(() => {
    component = render(<Product />);
  });

  it("Render correctly the Product screen", () => {
    expect(component).toBeDefined();
  });
});
