const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectedSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {/* playerSymbol es null en primer lugar */}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;

// function GameBoard({ onSelectedSquare, activePlayerSymbol }) {
/* const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // When a cell is clicked we obtain his index row and col, and replace the null of the initialGameBoard with the activePlayerSymbol
  function handleSelectedSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // Create a new array with a copy of an array with a copy of the inner arrays
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ]; // Hacer copia tambien de los arrays internos para no referenciar a los originales
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectedSquare();
  } */
