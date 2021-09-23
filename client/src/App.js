import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import AboutPage from './components/AboutPage/AboutPage';
import BlogPage from './components/BlogPage/BlogPage';
import Login from './components/Auth/Login';
import WorkRequestsList from './components/WorkRequests/WorkRequestsList';
import LoggedContext from './components/Auth/LoggedContext';
import ArticleDetailed from './components/BlogPage/Article/ArticleDetailed';
import SummaryEdit from './components/AboutPage/Summary/SummaryEdit';
import WorkExperienceEdit from './components/AboutPage/WorkExperience/WorkExperienceEdit';
import EducationEdit from './components/AboutPage/Education/EducationEdit';
import ProjectEdit from './components/AboutPage/Project/ProjectEdit';
import ErrorPageRights from './components/ErrorPages/NoRights';


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
            <BlogPage />
          </Route>

          <Route exact path='/blog/article/:id' component={ArticleDetailed}>
            
          </Route>

          <Route exact path='/edit/summary/2' component={(authenticated && localStorage.getItem('username') === 'admin')? SummaryEdit : ErrorPageRights}>
          </Route>

          <Route exact path='/edit/work-experience/:id' component={(authenticated && localStorage.getItem('username') === 'admin')? WorkExperienceEdit : ErrorPageRights}>
          </Route>

          <Route exact path='/edit/education/:id' component={(authenticated && localStorage.getItem('username') === 'admin')? EducationEdit : ErrorPageRights}>
          </Route>

          <Route exact path='/edit/projects/:id' component={(authenticated && localStorage.getItem('username') === 'admin')? ProjectEdit : ErrorPageRights}>
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
