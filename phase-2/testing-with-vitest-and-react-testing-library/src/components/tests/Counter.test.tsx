/// <reference types="vitest/globals" />
import Counter from "../Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Counter Component", () => {
  test("render initial counter value", () => {
    render(<Counter />);
    expect(screen.getByText(/Counter: 0/i));
  });

  test("increment counter on click of button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    await userEvent.click(incrementButton);
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
  });

  test("decrements the count on the click of the button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);
    await userEvent.click(incrementButton);
    expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
    await userEvent.click(decrementButton);
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });

  test("resets on the click of the button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Increment/i);
    const resetButton = screen.getByText(/Reset/i);

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    expect(screen.getByText(/Counter: 2/i)).toBeInTheDocument();
    await userEvent.click(resetButton);
    expect(screen.getByText(/Counter: 0/i)).toBeInTheDocument();
  });
});
