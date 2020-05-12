export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ADS':
      return { ...state, getAllAds: action.payload };
    case 'FETCH_ONE_AD':
      return { ...state, getSingleAd: action.payload };
    case 'POST_AD':
      return { ...state, postSingleAd: action.payload };
    default:
      return state;
  }
};
