import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders todo list component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByTestId("todo-input")).toBeInTheDocument();
    expect(screen.getByTestId("add-todo-button")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    // Add a todo
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    // Get the todo item and its checkbox
    const todoItem = screen.getByTestId(/todo-item-/);
    const checkbox = screen.getByTestId(/todo-checkbox-/);

    // Toggle the todo
    fireEvent.click(checkbox);

    // Check if the todo is marked as completed
    expect(checkbox).toBeChecked();
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    // Add a todo
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");
    fireEvent.change(input, { target: { value: "Todo to Delete" } });
    fireEvent.click(addButton);

    // Get the delete button and click it
    const deleteButton = screen.getByTestId(/delete-todo-/);
    fireEvent.click(deleteButton);

    // Check if the todo was removed
    expect(screen.queryByText("Todo to Delete")).not.toBeInTheDocument();
  });

  test("does not add empty todos", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    // Try to add an empty todo
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(addButton);

    // Check that no todo was added
    expect(screen.queryByTestId(/todo-item-/)).not.toBeInTheDocument();
  });
});
