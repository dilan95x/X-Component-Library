import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CUSTOMButton from "./";
import { ReactNode } from "react";
import { useHoverChecker } from "../hooks/useHoverChecker";
import { useButtonStyles } from "../hooks/stylesHooks/useButtonStyles";

interface CUSTOMButtonChildrenProps {
  children: ReactNode;
}

jest.mock("../hooks/useHoverChecker");
jest.mock("../hooks/stylesHooks/useButtonStyles");
jest.mock("./CUSTOMButtonChildren", () => ({
  CUSTOMButtonChildren: ({ children }: CUSTOMButtonChildrenProps) => <div>{children}</div>,
}));

describe("CUSTOMButton", () => {
  beforeEach(() => {
    (useHoverChecker as jest.Mock).mockReturnValue({
      isHover: false,
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
    });

    (useButtonStyles as jest.Mock).mockReturnValue({
      styles: { backgroundColor: "#0163CC" },
    });
  });

  test("renders with default props", () => {
    render(<CUSTOMButton>Click Me</CUSTOMButton>);
    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<CUSTOMButton onClick={handleClick}>Click Me</CUSTOMButton>);
    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick handler when disabled", () => {
    const handleClick = jest.fn();
    render(
      <CUSTOMButton onClick={handleClick} disabled>
        Click Me
      </CUSTOMButton>,
    );
    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("renders with loading state", () => {
    render(<CUSTOMButton loading>Click Me</CUSTOMButton>);
    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    expect(buttonElement).toBeDisabled();
  });

  test("renders with link properties", () => {
    const link = "http://example.com";
    render(
      <CUSTOMButton link={link} openInNewTab>
        Click Me
      </CUSTOMButton>,
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", link);
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  test("handles hover state", () => {
    (useHoverChecker as jest.Mock).mockReturnValue({
      isHover: true,
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
    });

    render(<CUSTOMButton>Hover Me</CUSTOMButton>);
    const buttonElement = screen.getByRole("button", { name: /Hover Me/i });

    fireEvent.mouseEnter(buttonElement);
    expect(useHoverChecker().onMouseEnter).toHaveBeenCalled();

    fireEvent.mouseLeave(buttonElement);
    expect(useHoverChecker().onMouseLeave).toHaveBeenCalled();
  });
});
