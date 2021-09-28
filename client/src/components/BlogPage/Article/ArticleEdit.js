import { useEffect, useState } from "react";
import FreeRequests from "../../../services/FreeRequests";
import { withRouter } from "react-router";
import AuthorizedCrud from "../../../services/AuthorizedCrud";

const EducationEdit = (props) => {

    const [article, setArticle] = useState([]);
    const id = props.match.params.id;

    const endpoint = `http://18.156.33.116:80/api/articles/${id}`;

    const deleteElement = (e) => {
        e.preventDefault();
        AuthorizedCrud('DELETE', endpoint);
        props.history.push('/blog')
    }

    useEffect(
        () => {

            FreeRequests('GET', endpoint)
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
                                          "image_url": e.target[2].value,
                                          })
        AuthorizedCrud('PATCH', endpoint, bodyToSend);

        props.history.push('/blog');

    };

    return (
        <form onSubmit={handleEditSubmit} className="GeneralForm">

            <label htmlFor='role'> Title: </label>
            <input type="text" id='role' defaultValue={article.title}/>
            <br/>
            <label htmlFor="textarea">Text: </label>
            <textarea id="textarea" defaultValue={article.text}></textarea>
            <br/>
            <input type="text"/>
            <br/>
            <button>Edit</button>
            <br/>
            <button onClick={deleteElement}>Delete</button>
        </form>
    )

}

export default withRouter(EducationEdit);