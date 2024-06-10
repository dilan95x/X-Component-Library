import React from "react";
import { act } from "react";
import { render } from "@testing-library/react";
import { useHoverChecker } from "./useHoverChecker";

describe("useHoverChecker", () => {
  it("should set isHover to true when onMouseEnter is called", () => {
    let onMouseEnter: () => void;
    let isHover: boolean = false;

    const TestComponent = () => {
      ({ onMouseEnter, isHover } = useHoverChecker());
      return null;
    };

    render(<TestComponent />);

    act(() => {
      onMouseEnter();
    });

    expect(isHover).toBe(true);
  });

  it("should set isHover to false when onMouseLeave is called", () => {
    let onMouseLeave: () => void;
    let isHover: boolean = false;

    const TestComponent = () => {
      ({ onMouseLeave, isHover } = useHoverChecker());
      return null;
    };

    render(<TestComponent />);

    act(() => {
      onMouseLeave();
    });

    expect(isHover).toBe(false);
  });
});
