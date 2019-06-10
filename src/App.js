import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import * as ROUTES from './constants/routes';
import NavigationContainer from './_containers/NavigationContainer';
import PoemFormContainer from './_containers/PoemFormContainer';
import PoemContainer from './_containers/PoemContainer';
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
        <div className="page">
          <Route path={ROUTES.LANDING} exact component={Landing} />
          <Route
            path={ROUTES.POEM}
            render={(match) => <PoemContainer {...match} />}
          />
          <Route path={ROUTES.POEMFORM} render={() => <PoemFormContainer />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
