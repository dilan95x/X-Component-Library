import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CUSTOMForm } from "./CUSTOMForm";

describe("CUSTOMForm component", () => {
  test("renders form fields and submit button with correct props", () => {
    const onSubmitMock = jest.fn();

    render(<CUSTOMForm onSubmit={onSubmitMock} />);

    expect(screen.getByLabelText("Price")).toBeInTheDocument();
    expect(screen.getByLabelText("Qty")).toBeInTheDocument();
    expect(screen.getByLabelText("Discount(for total items)")).toBeInTheDocument();

    const priceField = screen.getByLabelText("Price");
    const discountField = screen.getByLabelText("Discount(for total items)");
    expect(priceField).toBeInTheDocument();
    expect(discountField).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(submitButton).toBeInTheDocument();

    fireEvent.submit(screen.getByTestId("custom-form"));

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
