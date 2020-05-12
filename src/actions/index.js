import axios from 'axios';

export const fetchAds = () => async (dispatch) => {
  const res = await axios.get(
    'https://radiant-fortress-56278.herokuapp.com/posts'
  );
  dispatch({ type: 'FETCH_ADS', payload: res.data });
};

export const postAd = (values, history) => async (dispatch) => {
  const res = await axios.post(
    'https://radiant-fortress-56278.herokuapp.com/api/create_ad',
    values
  );
  dispatch(fetchAds()).then((res) => history.push('/'));

  dispatch({
    type: 'POST_AD',
    payload: {
      znamka: values.znamka,
      model: values.model,
      poraba: values.poraba,
      km: values.km,
      motor: values.motor,
    },
  });
};

export const fetchOneAd = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://radiant-fortress-56278.herokuapp.com/posts/${id}`
  );
  dispatch({ type: 'FETCH_ONE_AD', payload: res.data });
};

export const registerUser = (val) => async (dispatch) => {
  const res = await axios.post(
    'https://radiant-fortress-56278.herokuapp.com/api/users/register',
    val
  );
  console.log(val);
  console.log(res.data);
  dispatch({ type: 'USER_REG', payload: res.data });
};

export const loginUser = (val) => async (dispatch) => {
  const res = await axios.post(
    'https://radiant-fortress-56278.herokuapp.com/api/users/login',
    val
  );
  // console.log(res.data);
  //console.log('fromloginAction', res.data);
  dispatch({ type: 'USER_LOGIN', payload: res.data });
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get(
    'https://radiant-fortress-56278.herokuapp.com/api/users/logout'
  );
  dispatch({ type: 'USER_LOGOUT', payload: res.data });
};

export const pozabilGesloUser = (val) => async (dispatch) => {
  const res = await axios({
    method: 'GET',
    params: val,
    url:
      'https://radiant-fortress-56278.herokuapp.com/api/users/reset-password',
    headers: { 'Content-Type': 'application/json' },
  });
  //console.log(res.data);
  dispatch({ type: 'POZABIL_GESLO', payload: res.data });
};

export const ponastavitevGesla = (token, val) => async (dispatch) => {
  const res = await axios.post(
    `https://radiant-fortress-56278.herokuapp.com/api/users/password-reset/${token}`,
    val
  );

  dispatch({ type: 'PONASTAVITEV_GESLA', payload: res.data });
};

export const potrditevEmaila = (token) => async (dispatch) => {
  const res = await axios.get(
    `https://radiant-fortress-56278.herokuapp.com/api/users/confirmation/${token}`
  );
  dispatch({ type: 'POTRDITEV_EMAILA', payload: res.data });
};

export const userInfo = (id, token) => async (dispatch) => {
  const res = await axios.get(
    `https://radiant-fortress-56278.herokuapp.com/api/users/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  dispatch({ type: 'USER_INFO', payload: res.data });
};

export const updateUser = (id, token, desc) => async (dispatch) => {
  const res = await axios({
    method: 'PATCH',
    url: `https://radiant-fortress-56278.herokuapp.com/api/users/${id}`,
    data: {
      descryption: desc,
    },
    headers: { Authorization: `Bearer ${token}` },
  });

  dispatch({ type: 'USER_UPDATE', payload: res.data });
};

export const spremembaGesla = (data, token) => async (dispatch) => {
  console.log(data);
  const res = await axios({
    method: 'PATCH',
    url: `https://radiant-fortress-56278.herokuapp.com/api/users/update-password`,
    data,
    headers: { Authorization: `Bearer ${token}` },
  });

  dispatch({ type: 'SPREMEMBA_GESLA', payload: res.data });
};

export const deleteAccount = (id, token) => async (dispatch) => {
  const res = await axios.delete(
    `https://radiant-fortress-56278.herokuapp.com/api/users/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  dispatch({ type: 'DELETE_ACCOUNT', payload: res.data });
};

export const validateToken = (token) => async (dispatch) => {
  const res = await axios.post(
    `https://radiant-fortress-56278.herokuapp.com/api/users/activation-token-check/${token}`
  );

  dispatch({ type: 'VALIDATE_TOKEN', payload: res.data });
};

export const passwordResetTokenCheck = (token) => async (dispatch) => {
  const res = await axios.post(
    `https://radiant-fortress-56278.herokuapp.com/api/users/pass-reset-token-check/${token}`
  );

  dispatch({ type: 'PASS_RESET_TOKEN_CHECK', payload: res.data });
};

/*********************************** PRILJUBLJENO  /************************************/

export const dodajMedPriljubljeneCD = (id, token) => async (dispatch) => {
  const res = await axios({
    method: 'GET',
    url: 'https://radiant-fortress-56278.herokuapp.com/api/users/favourites',
    headers: { Authorization: `Bearer ${token}` },
  });

  var arr = JSON.parse(res.data.data).includes(id)
    ? JSON.parse(res.data.data)
    : [...JSON.parse(res.data.data), id];

  dispatch({
    type: 'DODAJ_MED_PRILJUBLJENECD',
    payload: arr,
  });
};

export const izbrisiPriljubljeneCD = (id, token) => async (dispatch) => {
  const res = await axios({
    method: 'GET',
    url: 'https://radiant-fortress-56278.herokuapp.com/api/users/favourites',
    headers: { Authorization: `Bearer ${token}` },
  });

  var arr = [...JSON.parse(res.data.data).filter((item) => item !== id)];

  dispatch({
    type: 'IZBRISI_PRILJUBLJENECD',
    payload: arr,
  });
};

export const dodajMedPriljubljene = (token, array) => async (dispatch) => {
  const res = await axios({
    method: 'PATCH',
    url: 'https://radiant-fortress-56278.herokuapp.com/api/users/favourites',
    headers: { Authorization: `Bearer ${token}` },
    data: {
      favourites: `[${array}]`,
    },
  });
  dispatch({ type: 'DODAJ_MED_PRILJUBLJENE', payload: res.data });
};

export const getFavourites = (token) => async (dispatch) => {
  const res = await axios({
    method: 'GET',
    url: 'https://radiant-fortress-56278.herokuapp.com/api/users/favourites',
    headers: { Authorization: `Bearer ${token}` },
  });

  dispatch({ type: 'GET_FAVOURITES', payload: res.data });
};

/*********************************** PRIMERJAVA  /************************************/

export const dodajPrimerjajCD = (id, token) => async (dispatch) => {
  const res = await axios({
    method: 'GET',
    url: 'https://radiant-fortress-56278.herokuapp.com/api/users/comparison',
    headers: { Authorization: `Bearer ${token}` },
  });

  var arr =
    JSON.parse(res.data.data).includes(id) ||
    JSON.parse(res.data.data).length > 2
      ? JSON.parse(res.data.data)
      : [...JSON.parse(res.data.data), id];

  dispatch({
    type: 'DODAJ_PRIMERJAJCD',
    payload: arr,
  });
};

export const izbrisiPrimerjajCD = (id, token) => async (dispatch) => {
  const res = await axios({
    method: 'GET',
    url: 'https://radiant-fortress-56278.herokuapp.com/api/users/comparison',
    headers: { Authorization: `Bearer ${token}` },
  });

  var arr = [...JSON.parse(res.data.data).filter((item) => item !== id)];

  dispatch({
    type: 'IZBRISI_PRIMERJAJCD',
    payload: arr,
  });
};

export const dodajMedPrimerjaj = (token, array) => async (dispatch) => {
  const res = await axios({
    method: 'PATCH',
    url: 'https://radiant-fortress-56278.herokuapp.com/api/users/comparison',
    headers: { Authorization: `Bearer ${token}` },
    data: {
      comparison: `[${array}]`,
    },
  });
  dispatch({ type: 'DODAJ_MED_PRIMERJAJ', payload: res.data });
};

export const getComparison = (token) => async (dispatch) => {
  const res = await axios({
    method: 'GET',
    url: 'https://radiant-fortress-56278.herokuapp.com/api/users/comparison',
    headers: { Authorization: `Bearer ${token}` },
  });

  dispatch({ type: 'GET_COMPARISON', payload: res.data });
};
