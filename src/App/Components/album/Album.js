import React from "react";
import {withRouter} from 'react-router-dom'

const Album = ({ album, history }) => {
  return (
    <div className="album">
          <div className="album_view">
            <div className="album_cover">
              <img src={album.cover} alt={album.name}/>
            </div>
            <div className="album_info" onClick={() => {history.push(`/album/${album.id}`)}}>
                <div className="name">{album.name}</div>
                <div className="artist">{album.artist}</div>
            </div>
          </div>
    </div>
  );
};

export default withRouter(Album);