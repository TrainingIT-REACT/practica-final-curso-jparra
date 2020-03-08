import React from "react";
import { connect } from 'react-redux';

// Acciones
 import { getAlbum } from '../../actions/albums';
import { getAlbumSongs } from "../../actions/songs";
import SongList from "../songs/SongList";

class AlbumDetails extends React.Component {

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.id);
    this.props.getAlbumSongs(this.props.match.params.id);
  }

  render( ) {
    const isLoadingAlbum = this.props.albums.isLoading;
    const isLoadingSongs = this.props.songs.isLoading;
    const { albumSongs, album } = this.props;

    if (isLoadingAlbum || isLoadingSongs) {
      return <p> Cargando ....</p>
    } else {
      return (
        <div className="album_detail">
              <div className="album_detail_info">
                <p>Album {this.props.match.params.id}</p>
                <div className="album_cover">
                  <img src={album.cover} alt={album.name}/>
                </div>
                <p><b>Nombre del album: </b>{album.name}</p>
                <p><b>Artista: </b>{album.artist}</p>
                <div className="album_songs">
                  <h3>Lista de canciones</h3>
                  <SongList songs={albumSongs} />
                </div>
              </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  ...state,
  album : state.albums.album,
  albumSongs: state.songs.songs
});

const mapDispatchToProps = (dispatch) => ({
  getAlbum: (albumId) => dispatch(getAlbum(albumId)),
  getAlbumSongs: (albumId) => dispatch(getAlbumSongs(albumId))
})

export default connect(
  mapStateToProps,
   mapDispatchToProps
)(AlbumDetails);