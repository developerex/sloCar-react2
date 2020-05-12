export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_REG':
      return { ...state, userReg: action.payload || false };
    case 'USER_LOGIN':
      if (action.payload.success === 1)
        return { ...state, userLogin: action.payload || false, login: true };
      return { ...state, userLogin: action.payload || false };
    case 'USER_LOGOUT':
      if (action.payload.success === 1)
        return { ...state, userLogout: action.payload || false, login: false };
      return { ...state, userLogout: action.payload || false };
    case 'USER_INFO':
      return { ...state, userInfo: action.payload || false };
    case 'USER_UPDATE':
      return { ...state, updateUser: action.payload || false };
    case 'SPREMEMBA_GESLA':
      return { ...state, spremembaGesla: action.payload || false };
    case 'DELETE_ACCOUNT':
      return { ...state, deleteAccount: action.payload || false };
    case 'POZABIL_GESLO':
      return { ...state, pozabilGeslo: action.payload || false };
    default:
      return state;
  }
};
