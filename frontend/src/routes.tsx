import React, { Suspense, lazy } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

const routes = (
  <Suspense fallback={<Loading />}>
    <Switch key="router">
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Suspense>
);

export default routes;
