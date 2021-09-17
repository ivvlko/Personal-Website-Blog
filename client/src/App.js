import './App.css';
import Navigation from './components/Navigation/Navigation';
import Summary from './components/Summary/Summary';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      
    <Navigation/>
    <Summary/>
    <WorkExperience/>
    <Education/>
    <Project/>
    </div>
  );
}

export default App;
