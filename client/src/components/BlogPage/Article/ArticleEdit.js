import { useEffect, useState } from "react";
import getSingleArticle from "../../../services/getSingleArticle";
import AuthorizedPatchRequests from "../../../services/PatchRequests";
import { withRouter } from "react-router";

const EducationEdit = (props) => {

    const [article, setArticle] = useState([]);
    const id = props.match.params.id;

    const patchEndpoint = `http://127.0.0.1:8000/api/articles/${id}`;

    useEffect(
        () => {

            getSingleArticle(id)
                .then(data => setArticle(
                    {
                        title: data.title,
                        text: data.text,
                    }
                ));
        }
        , [])


    const handleEditSubmit = (e) => {

        e.preventDefault();

        let bodyToSend = JSON.stringify({ "title": e.target[0].value,
                                          "text": e.target[1].value,
                                          })
        AuthorizedPatchRequests(patchEndpoint, bodyToSend);

        props.history.push('/blog');

    };

    return (
        <form onSubmit={handleEditSubmit}>

            <label htmlFor='role'> Title: </label>
            <input type="text" id='role' defaultValue={article.title}/>

            <label htmlFor="textarea">Text: </label>
            <textarea id="textarea" defaultValue={article.text}></textarea>

            <button>Edit</button>
        </form>
    )

}

export default withRouter(EducationEdit);