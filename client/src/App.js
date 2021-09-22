import './App.css';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './components/AboutPage/AboutPage';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import WorkRequestsList from './components/WorkRequests/WorkRequestsList';
import LoggedContext from './components/Auth/LoggedContext';
import {useState, useEffect} from 'react';

function App() {
  
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(localStorage.getItem('username') ? true : false)
  }, [])

  return (
    <div className="App">
      <LoggedContext.Provider value={{ authenticated, setAuthenticated }}>
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

          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='/work-requests'>
            <WorkRequestsList></WorkRequestsList>
          </Route>

        </Switch>

      </LoggedContext.Provider>

    </div>
  );
}

export default App;
