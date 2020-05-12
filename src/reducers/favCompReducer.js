export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_FAVOURITES':
      return { ...state, fav: action.payload };
    case 'GET_COMPARISON':
      return { ...state, comp: action.payload };
    default:
      return state;
  }
};
