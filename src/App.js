import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div id='page-body'>
          <Switch>
            <Route path='/' component={HomePage} exact />
            <Route path='/about' component={AboutPage} />
            <Route path='/articles-list' component={ArticleListPage} />
            <Route path='/article/:name' component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
