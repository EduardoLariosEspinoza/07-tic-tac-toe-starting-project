function Log({ turns }) {
  return (
    <ol id="log">
      {
        // With forEach method nothing happens, because it doesn't return anything
        turns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.col}, {turn.square.row}
          </li>
        ))
      }
    </ol>
  );
}

export default Log;
