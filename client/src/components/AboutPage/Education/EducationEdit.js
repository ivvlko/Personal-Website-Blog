import { useEffect, useState } from "react";
import getStaticModelsData from "../../../services/getStatic";
import AuthorizedPatchRequests from "../../../services/PatchRequests";
import { withRouter } from "react-router";

const EducationEdit = (props) => {

    const [education, setEducation] = useState([]);
    const id = props.match.params.id;
    const summaryPath = `education/${id}`;

    const patchEndpoint = `http://127.0.0.1:8000/api/static/education/${id}`;

    useEffect(
        () => {

            getStaticModelsData(summaryPath)
                .then(data => setEducation(
                    {
                        degree: data.degree,
                        school: data.school,
                        dates: data.dates,
                        shortDescrpition: data.short_description
                    }
                ));
        }
        , [])


    const handleEditSubmit = (e) => {

        e.preventDefault();

        let bodyToSend = JSON.stringify({ "degree": e.target[0].value,
                                          "school": e.target[1].value,
                                          "dates": e.target[2].value,
                                          "short_description": e.target[3].value })
        AuthorizedPatchRequests(patchEndpoint, bodyToSend);

        props.history.push('/');

    };

    return (
        <form onSubmit={handleEditSubmit}>

            <label htmlFor='role'> Degree: </label>
            <input type="text" id='role' defaultValue={education.degree}/>

            <label htmlFor='company'> School: </label>
            <input type="text" id='company' defaultValue={education.school}/>

            <label htmlFor='dates'> Dates: </label>
            <input type="text" id='dates' defaultValue={education.dates}/>

            <label htmlFor="textarea">Short Descrpition: </label>
            <textarea id="textarea" defaultValue={education.shortDescrpition} >

            </textarea>

            <button>Edit</button>
        </form>
    )

}

export default withRouter(EducationEdit);