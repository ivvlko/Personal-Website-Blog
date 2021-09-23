import { useEffect, useState } from "react";
import getStaticModelsData from "../../../services/getStatic";
import AuthorizedPatchRequests from "../../../services/PatchRequests";
import { withRouter } from "react-router";

const WorkExperienceEdit = (props) => {

    const [workExperience, setWorkExperience] = useState([]);
    const id = props.match.params.id;
    const summaryPath = `work-experience/${id}`;

    const patchEndpoint = `http://127.0.0.1:8000/api/static/work-experience/${id}`;

    useEffect(
        () => {

            getStaticModelsData(summaryPath)
                .then(data => setWorkExperience(
                    {
                        role: data.role,
                        company: data.company,
                        dates: data.dates,
                        shortDescrpition: data.short_description
                    }
                ));
        }
        , [])


    const handleEditSubmit = (e) => {

        e.preventDefault();

        let bodyToSend = JSON.stringify({ "role": e.target[0].value,
                                          "company": e.target[1].value,
                                          "dates": e.target[2].value,
                                          "short_description": e.target[3].value })
        AuthorizedPatchRequests(patchEndpoint, bodyToSend);

        props.history.push('/');

    };

    return (
        <form onSubmit={handleEditSubmit}>

            <label htmlFor='role'> Role: </label>
            <input type="text" id='role' defaultValue={workExperience.role}/>

            <label htmlFor='company'> Company: </label>
            <input type="text" id='company' defaultValue={workExperience.company}/>

            <label htmlFor='dates'> Dates: </label>
            <input type="text" id='dates' defaultValue={workExperience.dates}/>

            <label htmlFor="textarea">Short Descrpition: </label>
            <textarea id="textarea" defaultValue={workExperience.shortDescrpition} >

            </textarea>

            <button>Edit</button>
        </form>
    )

}

export default withRouter(WorkExperienceEdit);