import styles from './Summary.module.css';
import {useEffect, useState} from 'react';

const Summary = () => {

    const [summary, setSummary] = useState([]);

    useEffect(
        () => {
            const summaryUrl = 'http://127.0.0.1:8000/api/static/summary/2';
            fetch(summaryUrl)
            .then(res => res.json())
            .then((data) => {
                setSummary({image: data.image, shortDescription: data.paragraph_with_short_bio})
            } );
        }
    , [])

    return (
        <section className={styles.summarySection}>
            <h1 className={styles.summaryHeader}>Howdy? My name is Ivan. Welcome to my place!</h1>
            <p>{summary.shortDescription}</p>
        </section>
    )

}

export default Summary;