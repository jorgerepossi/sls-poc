import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import apolloClient from './apolloClient';
import rootReducer from './reducers';
import routes from './routes';

const store = configureStore(
  {
    reducer: rootReducer,
  },
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>{routes}</BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
