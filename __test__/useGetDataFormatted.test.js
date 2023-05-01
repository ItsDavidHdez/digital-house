import { render } from "@testing-library/react-native";
import { renderHook } from "@testing-library/react-hooks";
import useGetDateFormatted from "../src/hooks/useGetDateFormatted";

let useGetDateFormattedResult;

describe("useGetDateFormatted hook", () => {
  beforeEach(() => {
    useGetDateFormattedResult = renderHook(() => useGetDateFormatted);
  });

  it("Custom hook rendered", () => {
    expect(useGetDateFormattedResult).toBeDefined();
  });
});
