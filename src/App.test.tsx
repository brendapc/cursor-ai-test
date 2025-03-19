import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders counter components", () => {
  render(<App />);
  const headerElement = screen.getByText(/React Counter with Jest Testing/i);
  expect(headerElement).toBeInTheDocument();

  // Check if both counters are rendered
  expect(screen.getAllByText(/Counter:/i)).toHaveLength(2);
});
