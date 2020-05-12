export default (state = [], action) => {
  switch (action.type) {
    case 'DODAJ_PRIMERJAJCD':
      return action.payload;
    case 'IZBRISI_PRIMERJAJCD':
      return action.payload;
    default:
      return state;
  }
};
