import { useEffect, useState } from 'react';
import getStaticModelsData from '../../../services/getStatic';
import styles from './Education.module.css';
import Education from './Education';

const educationListEndpoint = 'education/';

const EducationList = () => {

    const [educationList, setEducationList] = useState([]);

    useEffect(() => {

        getStaticModelsData(educationListEndpoint)
            .then(data => setEducationList(data));

    }, []);

    return (
        <div>
            <h1 className={styles.educationHeader}>Education:</h1>
            <section className={styles.educationContainer}>
                {educationList.map(curr => <Education key={curr.id}
                    degree={curr.degree}
                    school={curr.school}
                    dates={curr.dates}
                    shortDescription={curr.short_description} />)}

            </section>
        </div>

    )

}

export default EducationList;