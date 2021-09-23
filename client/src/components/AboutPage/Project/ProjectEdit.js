import { useEffect, useState } from "react";
import getStaticModelsData from "../../../services/getStatic";
import AuthorizedPatchRequests from "../../../services/PatchRequests";
import { withRouter } from "react-router";

const ProjectEdit = (props) => {

    const [project, setProject] = useState([]);
    const id = props.match.params.id;
    const projectPath = `projects/${id}`;

    const patchEndpoint = `http://127.0.0.1:8000/api/static/projects/${id}`;

    useEffect(
        () => {

            getStaticModelsData(projectPath)
                .then(data => setProject(
                    {
                        name: data.name,
                        technologies: data.technologies,
                        source_code: data.source_code,
                        url: data.url,
                    }
                ));
        }
        , [])


    const handleEditSubmit = (e) => {

        e.preventDefault();

        let bodyToSend = JSON.stringify({
            "name": e.target[0].value,
            "technologies": e.target[1].value,
            "source_code": e.target[2].value,
            "url": e.target[3].value
        })

        AuthorizedPatchRequests(patchEndpoint, bodyToSend);

        props.history.push('/');

    };

    return (
        <form onSubmit={handleEditSubmit}>

            <label htmlFor='role'> Name: </label>
            <input type="text" id='role' defaultValue={project.name} />


            <label htmlFor="textarea">Technologies: </label>
            <textarea id="textarea" defaultValue={project.technologies} >

            </textarea>

            

            <label htmlFor='source_code'> Source Code: </label>
            <input type="text" id='source_code' defaultValue={project.source_code} />

            <label htmlFor='url'> Url: </label>
            <input type="text" id='url' defaultValue={project.url} />

            <button>Edit</button>
        </form>
    )

}

export default withRouter(ProjectEdit);