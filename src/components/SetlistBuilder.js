import React, { useState, useEffect } from "react";
import SongList from "./SongList";
import Setlist from "./Setlist";

function SetlistBuilder() {
  //songlist state
  const [songsList, setSongsList] = useState([]);
  // setList state
  const [rightSongs, setRightSongs] = useState([]);
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = () => {
    fetch("http://localhost:3110/tracks")
      .then((resp) => resp.json())
      .then((data) => setSongsList(data));
  };
  //add to setList
  const addToSetList = (addObj) => {
    if (rightSongs.includes(addObj) === false) {
      setRightSongs([...rightSongs, addObj]);
    }
  };
  //setList delete
  const songListDelete = (obj) => {
    //DELETE REQUEST
    fetch(`http://localhost:3110/tracks/${obj.id}`, {
      method: "DELETE",
    }).then(() => {
      setSongsList(songsList.filter((songEl) => songEl.id !== obj.id));
      setRightSongs(rightSongs.filter((songEl) => songEl.id !== obj.id));
    });
  };

  const deleteRightSide = (obj) => {
    setRightSongs(rightSongs.filter((songEl) => songEl.id !== obj.id));
  };
  return (
    <div className="builder">
      <SongList
        songsList={songsList}
        clickHandler={addToSetList}
        deleteHandler={songListDelete}
      />
      <div className="vl"></div>
      <Setlist
        rightSongs={rightSongs}
        deleteHandler={deleteRightSide}
        clickHandler={() => {}}
      />
    </div>
  );
}

export default SetlistBuilder;
