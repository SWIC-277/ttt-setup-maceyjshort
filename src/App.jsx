import "./App.css";
import Square from "./components/Square/Square";

function App() {
  // TODO: Add useReducer hook to track state of: board, turn, winner
  const board = new Array(9).fill("");
  return board.map((square, index) => (
    <Square key={index} id={index} handleClick={() => {}} />
  ));
}
export default App;
