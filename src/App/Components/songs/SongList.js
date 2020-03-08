import React from 'react';

import Song from './Song';

const SongList = ({ songs }) => {
  return <ul>
    { songs.map((song) => (
      <Song key={song.id} song={song} />
    ))}
  </ul>
}

export default SongList;