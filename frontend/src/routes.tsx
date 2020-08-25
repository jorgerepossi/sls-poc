import React, { Suspense, lazy } from "react";
import { Switch, Route  } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const OurWork = lazy(() => import("./pages/OurWork"));
const Team = lazy(() => import("./pages/Team"));

const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Error = lazy(() => import("./pages/Error"));

const routes = (
  <Suspense fallback={<Loading />}>
    <Switch key="router">
      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/our-team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route  component={Error} />
    </Switch>
  </Suspense>
);

export default routes;
