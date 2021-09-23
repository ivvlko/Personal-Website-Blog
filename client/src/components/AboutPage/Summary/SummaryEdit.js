import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import getStaticModelsData from "../../../services/getStatic";
import AuthorizedPatchRequests from "../../../services/PatchRequests";

const SummaryEdit = () => {

    const [summary, setSummary] = useState([]);
    const summaryPath = 'summary/2';
    const history = useHistory();
    const patchEndpoint = 'http://127.0.0.1:8000/api/static/summary/2'

   
    useEffect(
        () => {

            getStaticModelsData(summaryPath)
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

        let bodyToSend = JSON.stringify({ "paragraph_with_short_bio": e.target[0].value })
        AuthorizedPatchRequests(patchEndpoint, bodyToSend)
        history.push('/');

    };

    return (
        <form onSubmit={handleEditSubmit}>

            <label htmlFor="textarea">Change Summary: </label>
            <textarea id="textarea" defaultValue={summary.shortDescription} >

            </textarea>

            <button>Edit</button>
        </form>
    )

}

export default SummaryEdit;