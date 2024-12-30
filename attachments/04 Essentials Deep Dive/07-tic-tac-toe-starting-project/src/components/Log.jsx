import React from "react";
import { useState } from "react";

const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((trun) => (
        <li key={`${trun.square.row}${trun.square.col}`} >
          {trun.player} Selected {trun.square.row},{trun.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
