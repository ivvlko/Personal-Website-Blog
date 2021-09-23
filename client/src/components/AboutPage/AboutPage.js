import Summary from "./Summary/Summary"
import ProjectsList from './Project/ProjectsList';
import WorkExperiences from "./WorkExperience/WorkExperienceList";
import EducationList from './Education/EducationList';
import { withRouter } from "react-router-dom";

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

export default withRouter(AboutPage);