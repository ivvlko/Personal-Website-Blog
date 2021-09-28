import { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import AuthorizedCrud from "../../../services/AuthorizedCrud";
import FreeRequests from "../../../services/FreeRequests";

const SummaryEdit = (props) => {

    const [summary, setSummary] = useState([]);
    const endpoint = 'http://18.156.33.116:80/api/static/summary/2'

    const [image, setImage] = useState('');
    
    const registerChange = (e) => {
        setImage(e.target.files[0])
    }

    useEffect(
        () => {

            FreeRequests('GET', endpoint)
                .then(data => setSummary(
                    {
                        image: data.picture,
                        shortDescription: data.paragraph_with_short_bio
                    }
                ));
        }
        , [])


    const handleEditSubmit = (e) => {

        e.preventDefault();

        let formData = new FormData()
        formData.append('picture', image);
        formData.append('paragraph_with_short_bio', e.target[1].value)
        AuthorizedCrud('PATCH', endpoint, formData, null);

        props.history.push('/');

    };

    return (
        <form onSubmit={handleEditSubmit} className="GeneralForm">

            <label htmlFor='image'>Image</label>
            <input type='file' onChange={registerChange}/>
            <br/>
            <label htmlFor="textarea">Change Summary: </label>
            <textarea id="textarea" defaultValue={summary.shortDescription} >

            </textarea>
            <br/>
            <button>Edit</button>
        </form>
    )

}

export default withRouter(SummaryEdit);