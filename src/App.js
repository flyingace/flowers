import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import LandingContainer from './_containers/LandingContainer';
import NavigationContainer from './_containers/NavigationContainer';
import PoemContainer from './_containers/PoemContainer';
import PoemFormContainer from './_containers/PoemFormContainer';
import TableOfContents from './components/TableOfContents/TableOfContents';
import { requestAllPoems } from './_actions/PoemsActions';
import { Bio } from './components/Bio/Bio';
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
        <div className="page">
          <Route
            path={ROUTES.POEM}
            render={(match) => <PoemContainer {...match} />}
          />
          <Route path={ROUTES.TOC} render={() => <TableOfContents />} />
          <Route path={ROUTES.DAVIDCAMERON} render={() => <Bio />} />
          <Route path={ROUTES.POEMFORM} render={() => <PoemFormContainer />} />
          <Route
            path={ROUTES.POEMEDIT}
            render={() => <PoemFormContainer edit />}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
