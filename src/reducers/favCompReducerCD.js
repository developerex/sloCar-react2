export default (state = [], action) => {
  switch (action.type) {
    case 'DODAJ_MED_PRILJUBLJENECD':
      return action.payload;
    case 'IZBRISI_PRILJUBLJENECD':
      return action.payload;
    default:
      return state;
  }
};
