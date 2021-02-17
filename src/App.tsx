import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import WordPage from './pages/WordPage';
import './styles/index.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/word/:name" component={WordPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
