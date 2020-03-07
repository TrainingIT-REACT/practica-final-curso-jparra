import React from "react";
import {withRouter} from 'react-router-dom'

const AlbumDetails = ({match}) => {
  return (
    <div className="album_detail">
          <div className="album_info">
            <p>Detalles {match.params.id}</p>
            {/* <div className="album_cover">
              <img src={album.cover} alt={album.name}/>
            </div>
            <span>{album.name}</span>
            <span>{album.artist}</span> */}
            <div className="album__songs">
              {/* // <ListaCanciones data={canciones} /> */}
            </div>
          </div>
    </div>
  );
};

export default withRouter(AlbumDetails);