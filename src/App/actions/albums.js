import types from './types';
import { createAsyncAction} from "redux-promise-middleware-actions";

const albumsLoading = () => ({
  type: types.ALBUMS_LOADING
});

const albumsError = () => ({
  type: types.ALBUMS_ERROR
});

const albumsLoaded = (albums) => ({
  type: types.ALBUMS_LOADED,
  albums
})

const countAlbums = () => ({
  type: types.ALBUMS_COUNT
})

// Acciones con Thunk
export const getAlbums = () => async (dispatch) => {
  dispatch(albumsLoading());
  try {
    
    const res = await fetch('/albums');
    const json = await res.json();
    dispatch(albumsLoaded(json));
    await dispatch(countAlbums());
    
  } catch {
    dispatch(albumsError());
  }
};

// Acciones con promise
export const getAlbum = createAsyncAction("ALBUM", async (id) => {
  const res = await fetch(`/albums/${id}`);
  return await res.json();
});

