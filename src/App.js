import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import LandingContainer from './_containers/LandingContainer';
import NavigationContainer from './_containers/NavigationContainer';
import { requestAllPoems } from './_actions/PoemsActions';
import { Page } from './components/Page/Page';
import './App.scss';

function App() {
  useEffect(() => {
    requestAllPoems();
  }, []);

  return (
    <Router>
      <div className="app">
        <Route
          path={ROUTES.LANDING}
          exact
          render={() => <LandingContainer />}
        />
        <NavigationContainer />
        <Page />
      </div>
    </Router>
  );
}

export default App;
