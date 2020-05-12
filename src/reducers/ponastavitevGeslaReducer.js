export default (state = {}, action) => {
  switch (action.type) {
    case 'PONASTAVITEV_GESLA':
      return { ...state, ponastGesla: action.payload || false };
    case 'PASS_RESET_TOKEN_CHECK':
      return { ...state, passResetTokenCheck: action.payload || false };
    default:
      return state;
  }
};
