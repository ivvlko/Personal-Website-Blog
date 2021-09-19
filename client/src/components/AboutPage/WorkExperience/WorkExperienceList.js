import { useEffect, useState } from 'react';
import getStaticModelsData from '../../../services/getStatic';
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
        <div>
            <h1 className={styles.workExperienceHeader}>Work Experience: </h1>
            <section className={styles.experiencesContainer}>

                {workExperiences.map((current) => <WorkExperience
                    key={current.id + current.company + current.dates}
                    role={current.role}
                    company={current.company}
                    dates={current.dates}
                    shortDescription={current.short_description}
                />)}
            </section>
        </div>

    )

}

export default WorkExperiences;