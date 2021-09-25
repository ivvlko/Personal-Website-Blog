import { useContext } from 'react';
import LoggedContext from '../../Auth/LoggedContext';
import { NavLink } from 'react-router-dom';
import styles from './WorkExperienceList.module.css';

const WorkExperience = (props) => {

    const {authenticated} = useContext(LoggedContext)

    return (
    <section className={styles.workExperienceElement}>
        <h2>Role: {props.role}</h2>
        <br/>
        <h2>Company: {props.company}</h2>
        <br/>
        <h2>Period: {props.dates}</h2>
        <br/>
        <h2>Main Responsibilities: {props.shortDescription}</h2>
        
        {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink to={`/edit/work-experience/${props.id}`}>Edit</NavLink> : null}
    </section>
    )
}

export default WorkExperience;