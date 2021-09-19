import styles from './Education.module.css';
const Education = (props) => {

    return (
        <section className={styles.educationItem}>
            <h2>Degree:{props.degree}</h2>
            <h2>School:{props.school}</h2>
            <h2>Dates:{props.dates}</h2>
            <h2>Short Description:{props.shortDescription}</h2>
        </section>
    )

}

export default Education;