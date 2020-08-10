import React, { Suspense, lazy } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Loading from './components/Loading';

const SignUp = lazy(() => import('./pages/SignUp'));

const routes = (
  <HashRouter basename='/'>
    <Suspense fallback={<Loading />}>
      <Switch key='router'>
        <Route path='*' component={SignUp} />
      </Switch>
    </Suspense>
  </HashRouter>
);

export default routes;
