import React from "react";

function Song({ item, clickHandler, deleteHandler }) {
  return (
    <div className="song" onClick={() => clickHandler(item)}>
      <img src={item.image} />
      <div className="song-info">
        <h3>{item.song}</h3>
        <h4>{item.artist}</h4>
      </div>
      <button onClick={() => deleteHandler(item)}>X</button>
    </div>
  );
}

export default Song;
