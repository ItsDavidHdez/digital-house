import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";

import Moviments from "../src/components/Moviments";

let component;

describe("<Moviments />", () => {
  beforeEach(() => {
    component = render(<Moviments />);
  });

  it("Render correctly the Moviments component", () => {
    expect(component).toBeDefined();
    expect(component.queryByTestId("redeemed-button")).toBeDefined();
    expect(component.queryByTestId("win-button")).toBeDefined();
  });
});
