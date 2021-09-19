import './App.css';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './components/AboutPage/AboutPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Navigation />

      <Switch>
        <Route exact path='/'>
          <AboutPage />
        </Route>

        <Route exact path='/blog'>
          <h1>Blog</h1>
        </Route>

        <Route exact path='/contact'>
          <h1>Contact</h1>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
