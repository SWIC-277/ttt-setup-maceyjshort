import { render, screen } from "@testing-library/react";
import Square from "./Square";

it("renders a square with the correct marker('X' or 'O')", () => {
  render(<Square marker="X" />);

  const square = screen.getByRole("button", { name: "X" });

  expect(square).toHaveAttribute("id", "0");
  expect(square).toBeInTheDocument();
});
