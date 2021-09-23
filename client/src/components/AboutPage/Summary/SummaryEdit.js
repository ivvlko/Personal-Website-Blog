import { useEffect, useState } from "react";
import getStaticModelsData from "../../../services/getStatic";
import AuthorizedPatchRequests from "../../../services/PatchRequests";
import { withRouter } from 'react-router-dom';

const SummaryEdit = (props) => {

    const [summary, setSummary] = useState([]);
    const summaryPath = 'summary/2';
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
        AuthorizedPatchRequests(patchEndpoint, bodyToSend);

        props.history.push('/');

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

export default withRouter(SummaryEdit);