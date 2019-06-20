import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import LandingContainer from './_containers/LandingContainer';
import NavigationContainer from './_containers/NavigationContainer';
import PoemContainer from './_containers/PoemContainer';
import PoemFormContainer from './_containers/PoemFormContainer';
import TableOfContentsContainer from './_containers/TableOfContentsContainer';
import { requestAllPoems } from './_actions/PoemsActions';
import './App.scss';
import { Header } from './components/Header/Header';

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
        <div className="page">
          <NavigationContainer />
          <Header />
          <Route
            path={ROUTES.POEM}
            render={(match) => <PoemContainer {...match} />}
          />
          <Route
            path={ROUTES.TOC}
            render={() => <TableOfContentsContainer />}
          />
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
