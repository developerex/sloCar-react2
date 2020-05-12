import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { AdProvider } from './context/context';
import { CreateAdContexProvider } from './components/createAd/CreateAdContext';

import App from './App';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <AdProvider>
      <CreateAdContexProvider>
        <App />
      </CreateAdContexProvider>
    </AdProvider>
  </Provider>,
  document.getElementById('root')
);
