import Project from "./Project";
import { useEffect, useState } from 'react';
import getStaticModelsData from "../../../services/getStatic";
import styles from './Project.module.css';

const projectsListEndpoint = 'projects/';

const ProjectsList = () => {

    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        getStaticModelsData(projectsListEndpoint)
            .then(res => setProjectsList(res))
    }, [])

    return (
        <div>
            <h1>Projects</h1>

            <section className={styles.projectList}>

                {projectsList.map(curr => <Project key={curr.id}
                    name={curr.name}
                    image={curr.image}
                    technologies={curr.technologies}
                    sourceCode={curr.source_code} />)}
            </section>
        </div>

    )
}

export default ProjectsList;