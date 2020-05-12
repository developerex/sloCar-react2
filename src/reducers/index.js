import { combineReducers } from 'redux';
import adReducer from './adReducer';
import userReducer from './userReducer';
import ponastavitevGeslaReducer from './ponastavitevGeslaReducer';
import potrditevEmailaReducer from './potrditevEmailaReducer';
import favCompReducerCD from './favCompReducerCD';
import favCompReducer from './favCompReducer';
import dodajMedPrimerjaj from './primerjajCD';

export default combineReducers({
  all_ads: adReducer,
  userData: userReducer,
  ponastavitevGeslaInfo: ponastavitevGeslaReducer,
  emailInfo: potrditevEmailaReducer,
  favCompCD: favCompReducerCD,
  favComp: favCompReducer,
  compCD: dodajMedPrimerjaj,
});
