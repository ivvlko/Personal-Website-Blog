import { useEffect, useState } from "react";
import FreeRequests from "../../../services/FreeRequests";

const ArticleDetailed = ({match}) => {

    const [state, setState] = useState([]);
    const currentId = match.params.id;

    useEffect(() => {

        FreeRequests('GET', `http://127.0.0.1:8000/api/articles/${currentId}`)
            .then(res => setState(res))

    }, [])

    return (

        <article>
            <h2>{state.title}</h2>
            <h3>{state.date_created}</h3>
            <img src={state.image_url} alt="title"/>
            <p>{state.text}</p>
        </article>)

}

export default ArticleDetailed;