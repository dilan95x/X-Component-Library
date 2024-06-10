import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CUSTOMFormField } from "./CUSTOMFormField";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CUSTOMFormFieldProps } from "../types/CUSTOMFormFieldProps.types";
import { fromHandleChangeProps } from "../types/fromHandleChangeProps.types";

interface Props extends CUSTOMFormFieldProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  handleFocus: () => void;
  handleBlur: () => void;
  fromHandleChange: (e: fromHandleChangeProps) => void;
  value: string;
  startIconStyle: React.CSSProperties;
  endIconStyle: React.CSSProperties;
  inputStyle: React.CSSProperties;
}

describe("CUSTOMFormField", () => {
  const defaultProps: Props = {
    type: "text",
    name: "testField",
    disabled: false,
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn(),
    handleFocus: jest.fn(),
    handleBlur: jest.fn(),
    fromHandleChange: jest.fn(),
    value: "",
    startIcon: faCheck,
    startIconStyle: {
      position: "absolute",
      top: "35%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "#898989",
      left: "0.5rem",
    },
    endIcon: faCheck,
    endIconStyle: {
      position: "absolute",
      top: "35%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "#898989",
      right: "0.5rem",
    },
    inputStyle: {
      width: "100%",
      height: "3rem",
      padding: "0.6rem",
      paddingLeft: "2rem",
      paddingRight: "1.8rem",
      fontSize: "1rem",
      border: `0.13rem solid black`,
      borderBottom: `0.13rem solid black`,
      borderRadius: "0.2rem",
      outline: "visible",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
      marginBottom: "1.25rem",
    },
  };

  test("calls onMouseEnter and onMouseLeave handlers", () => {
    render(<CUSTOMFormField {...defaultProps} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.mouseEnter(inputElement);
    fireEvent.mouseLeave(inputElement);

    expect(defaultProps.onMouseEnter).toHaveBeenCalledTimes(1);
    expect(defaultProps.onMouseLeave).toHaveBeenCalledTimes(1);
  });

  test("calls handleFocus and handleBlur handlers", () => {
    render(<CUSTOMFormField {...defaultProps} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    expect(defaultProps.handleFocus).toHaveBeenCalledTimes(1);
    expect(defaultProps.handleBlur).toHaveBeenCalledTimes(1);
  });

  test("disables input field when disabled prop is true", () => {
    render(<CUSTOMFormField {...defaultProps} disabled={true} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  test("renders with custom input styles", () => {
    const customStyle = { border: "1px solid red" };
    render(<CUSTOMFormField {...defaultProps} inputStyle={customStyle} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveStyle("border: 1px solid red");
  });

  test("calls fromHandleChange handler on input change", () => {
    render(<CUSTOMFormField {...defaultProps} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(defaultProps.fromHandleChange).toHaveBeenCalledTimes(1);
  });

  test("handles absence of startIcon and endIcon props", () => {
    render(<CUSTOMFormField {...defaultProps} startIcon={undefined} endIcon={undefined} />);

    // Verify that the start icon is not rendered
    const startIcon = screen.queryByTestId("start-icon");
    expect(startIcon).not.toBeInTheDocument();

    // Verify that the end icon is not rendered
    const endIcon = screen.queryByTestId("end-icon");
    expect(endIcon).not.toBeInTheDocument();
  });

  test("handles default props correctly", () => {
    const defaultTestProps: Props = {
      ...defaultProps,
      startIcon: undefined,
      endIcon: undefined,
    };
    render(<CUSTOMFormField {...defaultTestProps} />);

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
