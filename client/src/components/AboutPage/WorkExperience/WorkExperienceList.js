import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LoggedContext from '../../Auth/LoggedContext';
import FreeRequests from '../../../services/FreeRequests';
import WorkExperience from './WorkExperience';
import styles from './WorkExperienceList.module.css';


const WorkExperiences = (props) => {

    const endpoint = 'http://18.156.33.116:80/api/static/work-experience/';
    const {authenticated} = useContext(LoggedContext)
    const [workExperiences, setWorkExperiences] = useState([]);

    useEffect(() => {
        FreeRequests('GET', endpoint)
            .then(data => setWorkExperiences(data.reverse()))

    }, [])

    return (
        <div className={styles.workExperienceContainer}>
            <h1 className={styles.workExperienceHeader}>Work Experience: </h1>
            <section className={styles.experiencesContainer}>

                {workExperiences.map((current) => <WorkExperience
                    key={current.id + current.company + current.dates}
                    id = {current.id}
                    role={current.role}
                    company={current.company}
                    dates={current.dates}
                    shortDescription={current.short_description}
                />)}
            </section>
            {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink className={styles.addButton} to='/add/experience'>Add</NavLink> : null}
        </div>

    )

}

export default WorkExperiences;