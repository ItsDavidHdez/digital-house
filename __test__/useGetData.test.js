import { render } from "@testing-library/react-native";
import { renderHook } from "@testing-library/react-hooks";
import useGetData from "../src/hooks/useGetData";

let useGetDataResult;

describe("useGetData hook", () => {
  beforeEach(() => {
    useGetDataResult = renderHook(() => useGetData);
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              createdAt: "2022-12-09T06:34:25.607Z",
              product: "Handmade Metal Shoes",
              points: 16434,
              image: "https://loremflickr.com/640/480/transport",
              is_redemption: false,
              id: "1",
            },
          ]),
      })
    );
  });

  it("Custom hook rendered", () => {
    expect(useGetDataResult).toBeDefined();
  });
});
