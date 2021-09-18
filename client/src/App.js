import './App.css';
import Navigation from './components/Navigation/Navigation';
import Summary from './components/Summary/Summary';
import WorkExperiences from './components/WorkExperience/WorkExperienceList';
import EducationList from './components/Education/EducationList';
import ProjectsList from './components/Project/ProjectsList';

function App() {
  return (
    <div className="App">

      <Navigation />
      <Summary />
      <WorkExperiences />
      <EducationList />
      <ProjectsList />
    </div>
  );
}

export default App;
