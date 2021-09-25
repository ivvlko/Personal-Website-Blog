import Summary from "./Summary/Summary"
import ProjectsList from './Project/ProjectsList';
import WorkExperiences from "./WorkExperience/WorkExperienceList";
import EducationList from './Education/EducationList';
import { withRouter } from "react-router-dom";
import styles from './AboutPage.module.css';

const AboutPage = () => {
    return (
        <section className={styles.aboutPage}>
            <Summary/>
            <WorkExperiences/>
            <EducationList/>
            <ProjectsList/>
        </section>
    )
}

export default withRouter(AboutPage);