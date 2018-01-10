// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/search"
          component={props => <Search shows={preload.shows} {...props} />}
        />
        <Route
          exact
          path="/details/:id"
          component={(props: Object) => {
            const selectedShow = preload.shows.find(
              show => props.match.params.id === show.imdbID
            );
            return <Details show={selectedShow} {...props} />;
          }}
        />
      </Switch>
    </div>
  </Provider>
);

export default App;
