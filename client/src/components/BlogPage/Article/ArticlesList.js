import Article from './Article';
import { useState, useEffect, useContext } from 'react';
import FreeRequests from '../../../services/FreeRequests';
import { NavLink } from "react-router-dom";
import LoggedContext from '../../Auth/LoggedContext';

const ArticlesList = () => {

    const {authenticated} = useContext(LoggedContext)
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        FreeRequests('GET', 'http://127.0.0.1:8000/api/articles/')
            .then(data => {
                setArticles(data)
            })

    }, [])

    return (
        <div>
            <h1>My Takes on:</h1>
            <section>
                {articles.map(art => <Article
                                        key={art.id}
                                        id={art.id}
                                        title={art.title}
                                        image={art.image_url}
                                        text={art.text}>
                                    </Article>)}

                

            </section>

            {(authenticated && localStorage.getItem('username') == 'admin') ? <NavLink to='/add/article'>Add</NavLink> : null}
            
        </div>

    )

};

export default ArticlesList;