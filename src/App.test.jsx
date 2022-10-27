import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders tic tac toe", () => {
  render(<App />);
  const squares = screen.getByAllRoles("button");

  expect(squares).toHaveLength(9);
});
