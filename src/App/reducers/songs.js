import { getAllSongs, getAlbumSongs, getSong} from '../actions/songs';

// Estado inicial
const initialState = {
  isLoading: false,
  songs: [],
  song: {},
  error: false,
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case String(getAllSongs.pending):
    case String(getAlbumSongs.pending):
    case String(getSong.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getAllSongs.fulfilled):
      return {
        ...state,
        isLoading: false,
        songs: action.payload,
        error: false
      }
    case String(getAlbumSongs.fulfilled):
        return {
          ...state,
          isLoading: false,
          songs: action.payload,
          error: false
        }
    case String(getSong.fulfilled):
        return {
          ...state,
          isLoading: false,
          song: action.payload,
          error: false
        }
    case String(getAllSongs.rejected):
    case String(getAlbumSongs.rejected):    
    case String(getSong.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;