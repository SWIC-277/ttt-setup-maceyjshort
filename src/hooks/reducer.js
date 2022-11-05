import check4Winner from "services/game.service";

export default function reducer(state, action) {
  switch (action.type) {
    case "made_move": {
      // Only mutate a local copy of the state
      const board2Update = [...state.board];
      let updatedTurn = state.turn;

      if (!board2Update[action.index]) {
        board2Update[action.index] = state.turn;
        updatedTurn = state.turn === "X" ? "O" : "X";
      }

      return {
        board: board2Update,
        turn: updatedTurn,
        winner: check4Winner(board2Update, state.turn) ? state.turn : null,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}
