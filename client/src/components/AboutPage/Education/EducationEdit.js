import { useEffect, useState } from "react";
import FreeRequests from "../../../services/FreeRequests";
import { withRouter } from "react-router";
import AuthorizedCrud from "../../../services/AuthorizedCrud";

const EducationEdit = (props) => {

    const [education, setEducation] = useState([]);
    const id = props.match.params.id;

    const endpoint = `http://18.156.33.116:80/api/static/education/${id}`;

    const deleteElement = (e) => {
        e.preventDefault();
        AuthorizedCrud('DELETE', endpoint);
        props.history.push('/')

    }

    useEffect(
        () => {

            FreeRequests('GET', endpoint)
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
        AuthorizedCrud('PATCH', endpoint, bodyToSend);

        props.history.push('/');

    };

    return (
        <form onSubmit={handleEditSubmit} className="GeneralForm" >

            <label htmlFor='role'> Degree: </label>
            <input type="text" id='role' defaultValue={education.degree}/>
            <br/>
            <label htmlFor='company'> School: </label>
            <input type="text" id='company' defaultValue={education.school}/>
            <br/>
            <label htmlFor='dates'> Dates: </label>
            <input type="text" id='dates' defaultValue={education.dates}/>
            <br/>
            <label htmlFor="textarea">Short Descrpition: </label>
            <textarea id="textarea" defaultValue={education.shortDescrpition} >

            </textarea>
            <br/>
            <button>Edit</button>
            <br/>
            <button onClick={deleteElement}>Delete</button>
        </form>
    )

}

export default withRouter(EducationEdit);