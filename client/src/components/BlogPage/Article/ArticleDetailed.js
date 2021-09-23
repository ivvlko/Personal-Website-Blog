import { useEffect, useState } from "react";
import getSingleArticle from '../../../services/getSingleArticle';

const ArticleDetailed = ({match}) => {

    const [state, setState] = useState([]);
    const currentId = match.params.id;

    useEffect(() => {

        getSingleArticle(currentId)
            .then(res => setState(res))

    }, [])

    return (

        <article>
            <h2>{state.title}</h2>
            <h3>{state.date_created}</h3>
            <img src={state.image} alt="title"/>
            <p>{state.text}</p>
        </article>)

}

export default ArticleDetailed;