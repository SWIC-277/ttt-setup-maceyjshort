import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Square from "./Square";

describe("Square", () => {
  it("renders a square with a marker and the correct id", () => {
    const ID = 0;
    const MARKER = "X";

    render(<Square marker={MARKER} id={ID} />);
    const square = screen.getByRole("button", { name: MARKER });
    expect(square).toHaveAttribute("id", ID.toString());
  });

  it("renders a square without a marker", () => {
    const ID = 0;

    render(<Square marker id={0} />);
    const square = screen.getByRole("button");

    expect(square).toHaveAttribute("id", ID.toString());
  });

  it("calls the click handler function whenever clicked", async () => {
    const ID = 0;
    const handleClick = jest.fn(); // mock function
    const user = userEvent.setup();

    render(<Square id={ID} handleClick={handleClick} />);

    const square = screen.getByRole("button");
    // simulating a click even happens asynchronously
    await user.click(square); // await requires function to be asynchronous

    expect(handleClick).toBeCalled();
  });
});
