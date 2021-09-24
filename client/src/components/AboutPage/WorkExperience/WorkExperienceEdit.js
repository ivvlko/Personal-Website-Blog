import { useEffect, useState } from "react";
import FreeRequests from "../../../services/FreeRequests";
import { withRouter } from "react-router";
import AuthorizedCrud from "../../../services/AuthorizedCrud";

const WorkExperienceEdit = (props) => {

    const [workExperience, setWorkExperience] = useState([]);
    const id = props.match.params.id;

    const deleteElement = (e) => {
        e.preventDefault();
        AuthorizedCrud('DELETE', endpoint);
        props.history.push('/')

    }

    const endpoint = `http://127.0.0.1:8000/api/static/work-experience/${id}`;

    useEffect(
        () => {

            FreeRequests('GET', endpoint)
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
        AuthorizedCrud('PATCH', endpoint, bodyToSend);

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
            <br/>
            <button onClick={deleteElement}>Delete</button>
        </form>
    )

}

export default withRouter(WorkExperienceEdit);