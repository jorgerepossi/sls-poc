import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Link } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import apolloClient from "./apolloClient";
import rootReducer from "./reducers";
import { Layout, Footer, Header } from "./components/";
import routes from "./routes";

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Header>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
          </Header>
          <Layout>{routes}</Layout>
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
