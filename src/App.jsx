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
            handleClick={!winner && makeMove}
            marker={square}
          />
        ))}
      </div>

      <button type="button"> some </button>
    </main>
  );
}
export default App;
// when I got rid of my div my board disappeared... I don't know why... Did I mess up following along?
// map is an array that only takes one agruement and return a markup/compenent from a server that is returned from an individual item from each time
// use unquie key for each item in map
