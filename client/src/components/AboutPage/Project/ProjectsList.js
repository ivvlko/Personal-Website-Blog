import Project from "./Project";
import { useEffect, useState, useContext } from 'react';
import FreeRequests from "../../../services/FreeRequests";
import styles from './Project.module.css';
import { NavLink } from "react-router-dom";
import LoggedContext from '../../Auth/LoggedContext';


const ProjectsList = () => {

    const {authenticated} = useContext(LoggedContext)
    const projectsListEndpoint = 'http://18.156.33.116:80/api/static/projects/';
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        FreeRequests('GET', projectsListEndpoint)
            .then(res => setProjectsList(res))
    }, [])

    return (
        <div className={styles.projectsContainer}>
            <h1 className={styles.header}>Projects: </h1>

            <section className={styles.projectList}>

                {projectsList.map(curr => <Project key={curr.id}
                    name={curr.name}
                    image={curr.image}
                    technologies={curr.technologies}
                    id={curr.id}
                    sourceCode={curr.source_code} />)}
            </section>
            {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink to='/add/project'>Add</NavLink> : null}
        </div>

    )
}

export default ProjectsList;