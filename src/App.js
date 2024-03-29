import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import LandingContainer from './_containers/LandingContainer';
import NavigationContainer from './_containers/NavigationContainer';
import PoemContainer from './_containers/PoemContainer';
import PoemFormContainer from './_containers/PoemFormContainer';
import About from './components/About/About';
import Afterword from './components/Afterword/Afterword';
import Page from './components/Page/Page';
import TableOfContents from './components/TableOfContents/TableOfContents';
import { requestAllPoems } from './_actions/PoemsActions';
import './App.scss';

function App() {
  useEffect(() => {
    requestAllPoems();
  }, []);

  return (
    <Router>
      <div className="app">
        <NavigationContainer />
        <Page>
          <Route
            path={ROUTES.LANDING}
            exact
            render={() => <LandingContainer />}
          />
          <Route
            path={ROUTES.POEM}
            render={(match) => <PoemContainer {...match} />}
          />
          <Route path={ROUTES.TOC} render={() => <TableOfContents />} />
          <Route path={ROUTES.ABOUT} render={() => <About />} />
          <Route path={ROUTES.AFTERWORD} render={() => <Afterword />} />
          {process.env.NODE_ENV !== 'production' && (
            <Route
              path={ROUTES.POEMFORM}
              render={() => <PoemFormContainer />}
            />
          )}
          <Route
            path={ROUTES.POEMEDIT}
            render={() => <PoemFormContainer edit />}
          />
        </Page>
      </div>
    </Router>
  );
}

export default App;
