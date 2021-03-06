import Article from './Article';
import { useState, useEffect, useContext } from 'react';
import FreeRequests from '../../../services/FreeRequests';
import { NavLink } from "react-router-dom";
import LoggedContext from '../../Auth/LoggedContext';
import styles from './Article.module.css';

const ArticlesList = () => {

    const {authenticated} = useContext(LoggedContext)
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        FreeRequests('GET', 'http://18.156.33.116:80/api/articles/')
            .then(data => {
                setArticles(data.reverse())
            })

    }, [])

    return (
        <div className={styles.container}>
            <section className={styles.ArticleList}>
                {articles.map(art => <Article
                                        key={art.id}
                                        id={art.id}
                                        title={art.title}
                                        image={art.image_url}
                                        text={art.text}>
                                    </Article>)}

                

            </section>

            {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink to='/add/article'>Add</NavLink> : null}
            
        </div>

    )

};

export default ArticlesList;