import { useEffect, useState } from 'react';
import getStaticModelsData from '../../services/getStatic';
import WorkExperience from './WorkExperience';
import styles from './WorkExperienceList.module.css';

const experiencesListEndpoint = 'work-experience/';

const WorkExperiences = () => {

    const [workExperiences, setWorkExperiences] = useState([]);
    useEffect(() => {

        
        getStaticModelsData(experiencesListEndpoint)
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