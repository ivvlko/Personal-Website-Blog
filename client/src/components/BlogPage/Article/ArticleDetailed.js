import { useEffect, useState } from "react";
import FreeRequests from "../../../services/FreeRequests";
import styles from './Article.module.css';

const ArticleDetailed = ({match}) => {

    const [state, setState] = useState([]);
    const currentId = match.params.id;

    useEffect(() => {

        FreeRequests('GET', `http://127.0.0.1:8000/api/articles/${currentId}`)
            .then(res => setState(res))

    }, [])

    return (

        <article className={styles.MyArticle} id='ArticleDetailPage'>
            <h2>{state.title}</h2>
            <h3>{state.date_created ? state.date_created.slice(0, 10) : null }</h3>
            <img src={state.image_url} alt="title"/>
            <p>{state.text}</p>
            <iframe src={state.embedded} width='100%' height='400px' frameborder='0' style={{marginTop: '10px', marginBottom: '10px'}}></iframe>
        </article>)

}

export default ArticleDetailed;