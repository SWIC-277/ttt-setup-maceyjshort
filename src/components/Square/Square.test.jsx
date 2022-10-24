import { render, screen } from "@testing-library/react";
import Square from "./Sqaure";

it("renders a square with the correct marker('X' or 'O')", () => {
  render(<Square marker="X" />);

  const squre = screen.getByRole("button", { name: "X" });

  expect(squre).toBeInTheDocument();
});
