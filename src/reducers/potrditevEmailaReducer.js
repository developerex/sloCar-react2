export default (state = {}, action) => {
  switch (action.type) {
    case 'POTRDITEV_EMAILA':
      return { ...state, emailData: action.payload };
    case 'VALIDATE_TOKEN':
      return { ...state, validateToken: action.payload };
    default:
      return state;
  }
};
