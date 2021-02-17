import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WordPage from './pages/WordPage';
import './styles/index.scss';

const App = () => {
  return (
    <Router>
      Hello world
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/word/:id" component={WordPage} />
      </Switch>
    </Router>
  );
};

export default App;
