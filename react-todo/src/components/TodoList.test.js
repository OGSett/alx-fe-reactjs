import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByTestId("todo-input"), {
    target: { value: "New Todo" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  const deleteButton = screen.getByLabelText("delete-1"); 
  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
