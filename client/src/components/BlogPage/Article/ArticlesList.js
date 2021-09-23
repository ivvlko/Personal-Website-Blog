import Article from './Article';
import { useState, useEffect } from 'react';
import getArticles from '../../../services/getArticles';


const ArticlesList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        getArticles()
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
                                        title={art.title}
                                        image={art.image}
                                        dateCreated={art.date_created}
                                        text={art.text}>
                                    </Article>)}
            </section>
        </div>

    )

};

export default ArticlesList;