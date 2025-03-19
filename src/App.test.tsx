import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders counter components", () => {
  render(<App />);
  const headerElement = screen.getByText(/React Components with Jest Testing/i);
  expect(headerElement).toBeInTheDocument();

  // Check if counter and todo list are rendered
  expect(screen.getByText(/Counter:/i)).toBeInTheDocument();
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});
