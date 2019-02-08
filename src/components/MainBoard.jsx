import React from 'react';

// {score: {user: 23, computer: 45}, currentWeapons: {user, computer}, message: "Loser!"}
export default function MainBoard(data) {
  return (
    <div className="main-board-container">
      <div className="main-board-score">{data.score.computer}</div>

      <div className="main-board-battle">
        <div className="main-board-weapons">
          <span>{data.currentWeapons.computer}</span>
          <span>{data.currentWeapons.user}</span>
        </div>
        <h2>{data.message}</h2>
      </div>

      <div className="main-board-score">{data.score.user}</div>
    </div>
  );
}
