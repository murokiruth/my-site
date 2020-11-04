import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/homePage';
import AboutPage from './Pages/aboutPage';
import ArticlesListPage from './Pages/articlesListPage';
import ArticlePage from './Pages/articlePage';
import NavBar from './navBar';
import NotFoundPage from './Pages/notFoundPage';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articlesList" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
