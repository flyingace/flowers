import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navigation from './components/Navigation/Navigation';
import PoemPage from './components/Poem/Poem';
import PoemForm from './components/PoemForm/PoemForm';
import TableOfContents from './components/TableOfContents/TableOfContents';
import * as ROUTES from './constants/routes';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="page">
          <Route path={ROUTES.LANDING} exact component={Landing} />
          <Route path="/poem/:poemId" render={PoemPage} />
          <Route path={ROUTES.POEMFORM} component={PoemForm} />
        </div>
      </div>
    </Router>
  );
}

export default App;
