import Summary from "./Summary/Summary"
import ProjectsList from './Project/ProjectsList';
import WorkExperiences from "./WorkExperience/WorkExperienceList";
import EducationList from './Education/EducationList';

const AboutPage = () => {
    return (
        <section>
            <Summary/>
            <WorkExperiences/>
            <EducationList/>
            <ProjectsList/>
        </section>
    )
}

export default AboutPage;