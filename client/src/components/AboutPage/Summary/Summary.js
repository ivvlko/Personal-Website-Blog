import styles from './Summary.module.css';
import { useEffect, useState } from 'react';
import getStaticModelsData from '../../../services/getStatic';

const Summary = () => {

    const [summary, setSummary] = useState([]);

    useEffect(
        () => {
            const summaryPath = 'summary/2';
            getStaticModelsData(summaryPath)
                .then(data => setSummary(
                    {
                        image: data.picture,
                        shortDescription: data.paragraph_with_short_bio
                    }
                ));
        }
        , [])

    return (
        <section className={styles.summarySection}>
            <h1 className={styles.summaryHeader}>Howdy? My name is Ivan. Welcome to my place!</h1>
            <img src={summary.image} alt="Me"/>
            <p>{summary.shortDescription}</p>
        </section>
    )

}

export default Summary;