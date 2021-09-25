import { useEffect, useState, useContext } from 'react';
import FreeRequests from '../../../services/FreeRequests';
import styles from './Education.module.css';
import Education from './Education';
import { NavLink } from "react-router-dom";
import LoggedContext from '../../Auth/LoggedContext';

const EducationList = () => {

    const {authenticated} = useContext(LoggedContext)
    const educationListEndpoint = 'http://127.0.0.1:8000/api/static/education/';
    const [educationList, setEducationList] = useState([]);

    useEffect(() => {

        FreeRequests('GET', educationListEndpoint)
            .then(data => setEducationList(data.reverse()));

    }, []);

    return (
        <div className={styles.educationContainer}>
            <h1 className={styles.educationHeader}>Education:</h1>
            <section className={styles.educationListContainer}>
                {educationList.map(curr => <Education key={curr.id}
                    degree={curr.degree}
                    id = {curr.id}
                    school={curr.school}
                    dates={curr.dates}
                    shortDescription={curr.short_description} />)}

            </section>
            {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink to='/add/education'>Add</NavLink> : null}
        </div>

    )

}

export default EducationList;