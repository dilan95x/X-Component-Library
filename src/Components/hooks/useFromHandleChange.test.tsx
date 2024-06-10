import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFromHandleChange } from "./useFromHandleChange";

describe("useFromHandleChange", () => {
  it("should update the value when fromHandleChange is called", async () => {
    let updatedValue: string = "";
    const onChangeMock = jest.fn();

    const TestComponent = () => {
      const { value, fromHandleChange } = useFromHandleChange();
      updatedValue = value;

      return (
        <input
          type="text"
          value={value}
          onChange={(e) => fromHandleChange({ e, onChange: onChangeMock })}
          data-testid="input"
        />
      );
    };

    render(<TestComponent />);
    userEvent.type(screen.getByTestId("input"), "test");
    await waitFor(() => {
      expect(updatedValue).toBe("test");
    });
  });

  it("should call the onChange function when fromHandleChange is called", async () => {
    const onChangeMock = jest.fn();
    const TestComponent = () => {
      const { value, fromHandleChange } = useFromHandleChange();
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => fromHandleChange({ e, onChange: onChangeMock })}
          data-testid="input"
        />
      );
    };

    render(<TestComponent />);
    userEvent.type(screen.getByTestId("input"), "test");

    await waitFor(() => {
    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "test" }),
      }),
    ); });


  });
});
