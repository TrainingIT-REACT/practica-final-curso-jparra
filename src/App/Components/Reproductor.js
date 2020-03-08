import React from 'react';
import { connect } from 'react-redux';

import Song from '../Components/songs/Song';

class Reproductor extends React.Component {

  renderSong = (song) => (
    <div className="active_song">
      <b>Canción activa: </b>
      <Song key={song.id} song={song} />
      <audio controls autoplay>
        <source src={song.audio} type="audio/mpeg" />
      </audio>
    </div>
  );

  renderDefault = () => (
    <audio controls>
      <source src="" type="audio/mpeg" />
    </audio>
  );

  render() {
    const song = this.props.songs.song;
    return (
      <div>
        <h1>Reproductor</h1>
        {song && song.length > 0 ? this.renderSong(song[0]) : this.renderDefault()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

export default connect(
  mapStateToProps,
)(Reproductor);
