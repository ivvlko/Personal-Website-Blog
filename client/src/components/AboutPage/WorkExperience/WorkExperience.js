import { useContext } from 'react';
import LoggedContext from '../../Auth/LoggedContext';
import { NavLink } from 'react-router-dom';
import styles from './WorkExperienceList.module.css';

const WorkExperience = (props) => {

    const {authenticated} = useContext(LoggedContext)

    return (
    <section className={styles.workExperienceElement}>
        <h2>{props.role} at {props.company}</h2>
        <br/>
        <h2>{props.dates}</h2>
        <br/>
        <h2>Responsibilities and Projects: </h2>
        <h2 className={styles.responsibilitiesAndProjects}>{props.shortDescription}</h2>
        
        
        {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink className='EditButton' to={`/edit/work-experience/${props.id}`}>Edit</NavLink> : null}
    </section>
    )
}

export default WorkExperience;