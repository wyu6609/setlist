import React from "react";
import { v4 as uuid } from "uuid";
import Song from "./Song";
function Setlist({ rightSongs, clickHandler, deleteHandler }) {
  return (
    <>
      <h2>Setlist</h2>
      <div className="setlist">
        {rightSongs.map((item) => {
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

export default Setlist;
