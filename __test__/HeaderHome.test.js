import React from "react";
import { render } from "@testing-library/react-native";

import HeaderHome from "../src/components/HeaderHome";

let component;

describe("<HeaderHome />", () => {
  beforeEach(() => {
    component = render(<HeaderHome />);
  });

  it("Render correctly HeaderHome component", () => {
    expect(component).toBeDefined();
  });
});
