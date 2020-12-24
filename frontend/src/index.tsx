import { ApolloProvider } from "@apollo/client";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import apolloClient from "./apolloClient";
import { Footer, Header, Layout, Navigation } from "./components/";
import "./components/styles/font/flaticon.css";
import "./components/styles/Icon.css";
import "./components/styles/Main.scss";
import "./components/styles/Normalize.css";
import "./components/styles/Reset.scss";
import dark from "./components/styles/Themes/dark";
import "./components/styles/ThemifyIcon/themify-icons.css";
import rootReducer from "./reducers";
import routes from "./routes";


const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <ThemeProvider theme={dark}>
            <Header children={<Navigation />} />
            <Layout>{routes}</Layout>
            <Footer />
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
