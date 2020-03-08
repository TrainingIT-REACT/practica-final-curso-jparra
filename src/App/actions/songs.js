import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAllSongs = createAsyncAction('SONGS', async () => {
    const res = await fetch('/songs')
    return await res.json();
  });

export const getAlbumSongs = createAsyncAction('ALBUM_SONGS', async (album_id) => {
  const res = await fetch(`/songs?album_id=${album_id}`);
  return await res.json();
});

export const getSong = createAsyncAction('SONG', async (id) => {
    const res = await fetch(`/songs?id=${id}`);
    return await res.json();
});