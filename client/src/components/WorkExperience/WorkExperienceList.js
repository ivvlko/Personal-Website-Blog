import { useEffect, useState } from 'react';
import getStaticEndpoint from '../../services/getStatic';
import WorkExperience from './WorkExperience';
import styles from './WorkExperienceList.module.css';

const WorkExperiences = () => {

    const [workExperiences, setWorkExperiences] = useState([]);
    useEffect(() => {

        const experiencesPath = 'work-experience/';
        getStaticEndpoint(experiencesPath)
            .then(data => setWorkExperiences(data))

    }, [])

    return (
        <section>
            <h1 className={styles.workExperienceHeader}>Work Experience: </h1>
            {workExperiences.map((current) => <WorkExperience
                key={current.id + current.company + current.dates}
                role={current.role}
                company={current.company}
                dates={current.dates}
                shortDescription={current.short_description}
            />)}
        </section>
    )

}

export default WorkExperiences;