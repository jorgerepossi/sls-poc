import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import apolloClient from "./apolloClient";
import rootReducer from "./reducers";
import { Layout, Footer, Header } from "./components/";
import routes from "./routes";
import { Navigation } from "./components/Navbar";

import "./components/styles/Reset.scss";
import "./components/styles/Main.scss";
import "./components/styles/Normalize.css";
import "./components/styles/ThemifyIcon/themify-icons.css";

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Header children={<Navigation />} />
          <Layout>{routes}</Layout>
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
