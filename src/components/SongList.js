import React from "react";
import Song from "./Song";
import { v4 as uuid } from "uuid";
function SongList({ songsList, clickHandler, deleteHandler }) {
  return (
    <>
      <h2>Song List</h2>
      <div className="song-list">
        {songsList.map((item) => {
          return (
            <Song
              item={item}
              key={uuid()}
              clickHandler={clickHandler}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </>
  );
}

export default SongList;
