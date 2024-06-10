import React from "react";
import { act } from "react";
import { render } from "@testing-library/react";
import { useFocusChecker } from "./useFocusChecker";

describe("useFocusChecker", () => {
  it("should set focused to true when handleFocus is called", () => {
    let handleFocus: () => void;
    let focused: boolean = false;

    const TestComponent = () => {
      ({ handleFocus, focused } = useFocusChecker());
      return null;
    };

    render(<TestComponent />);

    act(() => {
      handleFocus();
    });

    expect(focused).toBe(true);
  });

  it("should set focused to false when handleBlur is called", () => {
    let handleBlur: () => void;
    let focused: boolean = false;

    const TestComponent = () => {
      ({ handleBlur, focused } = useFocusChecker());
      return null;
    };

    render(<TestComponent />);

    act(() => {
      handleBlur();
    });

    expect(focused).toBe(false);
  });
});
