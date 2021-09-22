import styles from './Project.module.css';

const Project = (props) => {

    return (
    <section className={styles.projectItem}>
        
       <h2>Name: {props.name}</h2>
       <img src={props.image} className={styles.projectImage} alt="layout"/>
       <h2>Technologies: {props.technologies}</h2>
       <h2>Source code: {props.sourceCode}</h2>
       <h2>Url:{props.url ? props.url : 'Not Deployed'}</h2>

    </section>
    )

}

export default Project;