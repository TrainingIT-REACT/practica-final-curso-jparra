import React, { Component } from 'react';
import { connect } from "react-redux";
import Album from './Album';

// Acciones
import { getAlbums } from '../../actions/albums';

class Albums extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    const { isLoading } = this.props;
    const albums = this.props.list ? this.props.list : this.props.albums.albums;
    return (
      <div className="albums">
        {!this.props.list  ? <h2>Todos los albumes</h2> : ""}
        { isLoading || !albums ?
            <p> Cargando ....</p>
            :  albums.map((album) => (
                <Album album={album} key={album.id} onClick={() => alert('hello')} />
             ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbums()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
