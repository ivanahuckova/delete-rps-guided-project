import React from 'react';

export default function History(data) {
  return (
    <div className="history-container">
      {data.history.map((item, idx) => (
        <span>{item}&nbsp;</span> // &nbsp; not breaking span -> aka medzera
      ))}
    </div>
  );
}
