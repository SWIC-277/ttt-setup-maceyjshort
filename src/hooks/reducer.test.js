import reducer from "./reducer";

it("should only update the board with the current turn for 'null' position (only once)", () => {
  const state = {
    board: [null, null, null, null, null, null, null, null, null],
    turn: "X",
  };

  const action = {
    type: "made_move",
    index: 0,
  };

  const newState = reducer(state, action);
  const newState2 = reducer(newState, action);

  expect(newState.board[0]).toBe("X");
  expect(newState2.board[0]).toBe("X");
});

it("updates the winner after winning a move", () => {
  const state = {
    board: ["X", "O", "X", "O", "X", "O", null, null, null],
    turn: "X",
  };
  const action = {
    type: "made_move",
    index: 6,
  };

  const newState = reducer(state, action);

  expect(newState.winner).toBe("X");
});

it("makes sure that a player cannot skip a move", () => {
  const state = {
    board: ["X", "O", "X", "O", "X", "O", null, null, null],
    turn: "X",
  };
  const action = {
    type: "made_move",
    index: 6,
  }
  // I don't know how to do this
  const newState = reducer(state, action);
  expect(newState.)
});
