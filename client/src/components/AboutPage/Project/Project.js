import { useContext } from 'react';
import LoggedContext from '../../Auth/LoggedContext';
import { NavLink } from 'react-router-dom';
import styles from './Project.module.css';

const Project = (props) => {

    const {authenticated} = useContext(LoggedContext)
    
    return (
    <section className={styles.projectItem}>
        
       <h2>{props.name}</h2>
       <br/>
       <img src={props.image} className={styles.projectImage} alt="layout"/>
       <br/>
       <h2>{props.technologies}</h2>
       <br/>
       <h2><a target="_blank" href={props.sourceCode}>Repository: Click </a></h2>
       {(authenticated && localStorage.getItem('username') === 'admin') ?  <NavLink className='EditButton' to={`/edit/projects/${props.id}`}>Edit</NavLink> : null}
      
    </section>
    )

}

export default Project;