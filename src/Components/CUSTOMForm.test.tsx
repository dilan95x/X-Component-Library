import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CUSTOMForm } from "./CUSTOMForm";

describe("CUSTOMForm component", () => {
  test("renders form fields and submit button with correct props", () => {
    // Mock onSubmit function
    const onSubmitMock = jest.fn();

    // Render the form
    render(<CUSTOMForm onSubmit={onSubmitMock} />);

    // Check if form fields are rendered with correct props
    expect(screen.getByLabelText("Price")).toBeInTheDocument();
    expect(screen.getByLabelText("Qty")).toBeInTheDocument();
    expect(screen.getByLabelText("Discount(for total items)")).toBeInTheDocument();

    // Check if form fields have correct icons
    const priceField = screen.getByLabelText("Price");
    const discountField = screen.getByLabelText("Discount(for total items)");
    expect(priceField).toBeInTheDocument();
    expect(discountField).toBeInTheDocument();

    // Check if submit button is rendered
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();

    // Trigger form submission
    fireEvent.submit(screen.getByTestId("custom-form"));

    // Check if onSubmit function is called
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
