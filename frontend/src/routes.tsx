import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const OurWork = lazy(() => import("./pages/OurWork"));
const Contact = lazy(() => import("./pages/Contact"));

const routes = (
  <Suspense fallback={<Loading />}>
    <Switch key="router">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Suspense>
);

export default routes;
