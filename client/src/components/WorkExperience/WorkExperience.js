import styles from './WorkExperienceList.module.css';

const WorkExperience = (props) => {
    return (
    <section className={styles.workExperienceElement}>
        <h2>Role: {props.role}</h2>
        <h2>Company: {props.company}</h2>
        <h2>Time:{props.dates}</h2>
        <h2>Main Responsibilities: {props.shortDescription}</h2>
    </section>
    )
}

export default WorkExperience;