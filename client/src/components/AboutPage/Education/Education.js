import { useContext } from 'react';
import LoggedContext from '../../Auth/LoggedContext';
import { NavLink } from 'react-router-dom';
import styles from './Education.module.css';


const Education = (props) => {

    const {authenticated} = useContext(LoggedContext)

    return (
        <section className={styles.educationItem}>
            <h2>Degree:{props.degree}</h2>
            <br/>
            <h2>School:{props.school}</h2>
            <br/>
            <h2>Dates:{props.dates}</h2>
            <br/>
            <h2>Disciplines: {props.shortDescription}</h2>
            {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink className='EditButton' to={`/edit/education/${props.id}`}>Edit</NavLink> : null}
        </section>
    )

}

export default Education;