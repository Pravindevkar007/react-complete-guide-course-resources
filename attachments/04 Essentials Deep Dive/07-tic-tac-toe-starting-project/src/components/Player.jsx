import React from "react";
import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newplayerName, setNewPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, newplayerName);
    }
  }

  function handleChangeName(e) {
    setNewPlayerName(e.target.value);
  }

  let playerName = <span className="player-name">{newplayerName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={newplayerName}
        onChange={handleChangeName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
