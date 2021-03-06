import styles from './Summary.module.css';
import { useContext } from 'react';
import LoggedContext from '../../Auth/LoggedContext';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FreeRequests from '../../../services/FreeRequests';

const Summary = (props) => {

    const {authenticated} = useContext(LoggedContext)

    const [summary, setSummary] = useState([]);
    useEffect(
        () => {
            const summaryPath = 'http://18.156.33.116:80/api/static/summary/2';
            FreeRequests('GET', summaryPath)
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
            <h1 className={styles.summaryHeader}>Howdy? I'm Ivan. Welcome to my place!</h1>
            <img src={summary.image} alt="Me" className={styles.profileImage}/>
            <p className={styles.shortDescription}>{summary.shortDescription}</p>
            {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink className='EditButton' to='/edit/summary/2'>Edit</NavLink> : null}
        </section>
    )

}

export default Summary;