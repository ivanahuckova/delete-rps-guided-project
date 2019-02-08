import React from 'react';

export default function WeaponSelector(data) {
  return (
    <div className="weapon-selector-container">
      <button onClick={() => data.play('Rock')}>Rock</button>
      <button onClick={() => data.play('Paper')}>Paper</button>
      <button onClick={() => data.play('Scissors')}>Scissors</button>
    </div>
  );
}
