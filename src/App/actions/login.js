import types from './types';

export const updateUser = (user) => ({
  type: types.UPDATE_USER,
  user
});