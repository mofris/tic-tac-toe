import { useState } from "react";
import Button from "./components/Button";

function Board({ xIsNext, square, onPlay }) {
  function handleClick(i) {
    if (square[i] || calculateWinner(square)) return;

    const nextSquare = square.slice();
    nextSquare[i] = xIsNext ? "X" : "O";

    onPlay(nextSquare);
  }

  const winner = calculateWinner(square);
  let status = "";
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">
        <h1>{status}</h1>
      </div>
      <div className="board">
        <Button value={square[0]} onSquareClick={() => handleClick(0)} />
        <Button value={square[1]} onSquareClick={() => handleClick(1)} />
        <Button value={square[2]} onSquareClick={() => handleClick(2)} />
        <Button value={square[3]} onSquareClick={() => handleClick(3)} />
        <Button value={square[4]} onSquareClick={() => handleClick(4)} />
        <Button value={square[5]} onSquareClick={() => handleClick(5)} />
        <Button value={square[6]} onSquareClick={() => handleClick(6)} />
        <Button value={square[7]} onSquareClick={() => handleClick(7)} />
        <Button value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return false;
}

export default function App() {
  // membuat x jalan duluan
  const [xIsNext, setXIsNext] = useState(true);
  // membuat histori
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // mengambil array terakhir
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquare) {
    setHistory([...history, nextSquare]);
    setXIsNext(!xIsNext);
  }

  const moves = history.map((squares, move) => {
    let desc = "";
    if (move > 0) {
      desc = "Go to move #" + move;
    } else {
      desc = "Go to Game Start";
    }

    return (
      <li key={move}>
        <button className="map">{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h2>Road Map</h2>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
