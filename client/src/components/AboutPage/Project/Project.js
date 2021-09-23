import { useContext } from 'react';
import LoggedContext from '../../Auth/LoggedContext';
import { NavLink } from 'react-router-dom';
import styles from './Project.module.css';

const Project = (props) => {

    const {authenticated} = useContext(LoggedContext)
    
    return (
    <section className={styles.projectItem}>
        
       <h2>Name: {props.name}</h2>
       <img src={props.image} className={styles.projectImage} alt="layout"/>
       <h2>Technologies: {props.technologies}</h2>
       <h2>Source code: {props.sourceCode}</h2>
       <h2>Url:{props.url ? props.url : 'Not Deployed'}</h2>
       {(authenticated && localStorage.getItem('username') == 'admin') ?  <NavLink to={`/edit/projects/${props.id}`}>Edit</NavLink> : null}
      
    </section>
    )

}

export default Project;