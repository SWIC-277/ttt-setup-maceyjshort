import { useReducer } from "react";

function reducer(state, action) {
  switch ((action, type)) {
    case "made_move": {
      const board2Update = [...state.board];

      if (board2Update[action.index] === null) {
        board2Update[action.index] = state.turn;
      }
    }
  }
}

export default function useGame() {
  const { state, dispatch } = useReducer(reducer, {
    board: Array(9).fill(null),
    turn: "X",
  });
}
