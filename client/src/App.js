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
import ArticleEdit from './components/BlogPage/Article/ArticleEdit';
import AddWorkExperience from './components/AboutPage/WorkExperience/AddWorkExperience';
import AddProject from './components/AboutPage/Project/AddProject';
import AddEducation from './components/AboutPage/Education/AddEducation';
import AddArticle from './components/BlogPage/Article/AddArticle';
import ContactForm from './components/WorkRequests/ContactForm';
import Registration from './components/Auth/Register';
import Footer from './components/Footer/Footer';


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
          <Route exact path='/' component={AboutPage}/>
            
          <Route exact path='/blog' component={BlogPage}/>
            

          <Route exact path='/blog/article/:id' component={ArticleDetailed}/>
            

          <Route exact path='/edit/summary/2' component={(authenticated && localStorage.getItem('username') === 'admin')? SummaryEdit : ErrorPageRights}/>

          <Route exact path='/edit/work-experience/:id' component={(authenticated && localStorage.getItem('username') === 'admin')? WorkExperienceEdit : ErrorPageRights}/>

          <Route exact path='/edit/education/:id' component={(authenticated && localStorage.getItem('username') === 'admin')? EducationEdit : ErrorPageRights}/>

          <Route exact path='/edit/projects/:id' component={(authenticated && localStorage.getItem('username') === 'admin')? ProjectEdit : ErrorPageRights}/>

          <Route exact path='/edit/articles/:id' component={(authenticated && localStorage.getItem('username') === 'admin')? ArticleEdit : ErrorPageRights}/>

          <Route exact path='/add/experience' component={(authenticated && localStorage.getItem('username') === 'admin')? AddWorkExperience : ErrorPageRights}/>
          <Route exact path='/add/project' component={(authenticated && localStorage.getItem('username') === 'admin')? AddProject : ErrorPageRights}/>
          <Route exact path='/add/education' component={(authenticated && localStorage.getItem('username') === 'admin')? AddEducation : ErrorPageRights}/>
          <Route exact path='/add/article' component={(authenticated && localStorage.getItem('username') === 'admin')? AddArticle : ErrorPageRights}/>

          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Registration}/>

          <Route exact path='/work-requests' component={WorkRequestsList}/>

          <Route exact path='/contact' component={ContactForm}/>


        </Switch>

      </LoggedContext.Provider>

      <Footer/>
    </div>
  );
}

export default App;
