/// <reference types="vitest/globals" />
import Counter from "../Counter";
import { render } from "@testing-library/react";

describe("Counter Component", () => {
  test("render initial counter value", () => {
    render(<Counter />);
  });
});
