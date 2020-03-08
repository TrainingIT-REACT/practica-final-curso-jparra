import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Album from './Album';

// Acciones
import { getAlbums } from '../../actions/albums';

class Albums extends Component {

  componentDidMount() {
    this.props.getAlbums();
  }

  renderAlbums = (albums) => (
    albums.map((album) => (
    <Album album={album} key={album.id} />
 )));

 renderHeader = () => (
  <Fragment><h2>Todos los albums</h2> <p>Total de albums en catálogo: {this.props.albums.count}</p></Fragment>
 );

  render() {
    const { isLoading } = this.props;
    const albums = this.props.list ? this.props.list : this.props.albums.albums;

    return (
      <div className="albums">
        {!this.props.list  ?  this.renderHeader() : ""}
        { isLoading || !albums ?
            <p> Cargando ....</p>
            : this.renderAlbums(albums)
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
