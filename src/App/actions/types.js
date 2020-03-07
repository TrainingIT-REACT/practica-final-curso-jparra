// Definimos la lista de acciones
const actions = [
  "ALBUMS_LOADING",
  "ALBUMS_LOADED",
  "ALBUMS_ERROR",
  "ALBUMS_COUNT",
  "UPDATE_USER"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
