import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let editablePlayerName = isEditing ? (
    /* Two way binding, pasamos a la funcion fuera del elemento y tambien obtenemos algo desde fuera, en este caso el nuevo valor de playerName */
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  function handleCLick() {
    if (isEditing) {
      onChangeName(symbol, playerName);
    }

    setIsEditing((editing) => !editing);
  }

  // El event se pasa solo
  function handleChange(event) {
    // Al hacer un cambio en el input, se actualiza el contenido del input pero despues vuelve, se borra y se remplaza por lo que tenga la propiedad de value
    // Para evitar esto utilizamos un estado como value y cambiamos ese valor en esta funcion
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleCLick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
