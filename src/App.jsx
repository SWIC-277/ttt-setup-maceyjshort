import "./App.css";
import Square from "./components/Square/Square";
import useGame from "./hooks/useGame";

function App() {
  const { board, winner, makeMove } = useGame();
  return (
    <main>
      <h1>Tic Tac Toe</h1>

      {winner && <p>{winner} WINS!</p>}

      <div className="board">
        {board.map((square, index) => (
          <Square
            key={index}
            id={index}
            handleClick={makeMove}
            marker={square}
          />
        ))}
      </div>
    </main>
  );
}
export default App;
// when I got rid of my div my board disappeared... I don't know why... Did I mess up following along?
