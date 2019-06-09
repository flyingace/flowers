import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navigation from './components/Navigation/Navigation';
import TableOfContents from './components/TableOfContents/TableOfContents';
import * as ROUTES from './constants/routes';
import './App.scss';
import PoemFormContainer from './_containers/PoemFormContainer';
import PoemContainer from './_containers/PoemContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="page">
          <Route path={ROUTES.LANDING} exact component={Landing} />
          <Route path={ROUTES.POEM} render={() => <PoemContainer />} />
          <Route path={ROUTES.POEMFORM} render={() => <PoemFormContainer />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
