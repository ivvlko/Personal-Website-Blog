import { useEffect, useState } from "react";
import FreeRequests from "../../../services/FreeRequests";
import { withRouter } from "react-router";
import AuthorizedCrud from "../../../services/AuthorizedCrud";

const ProjectEdit = (props) => {

    const [project, setProject] = useState([]);
    const [image, setImage] = useState('');
    const id = props.match.params.id;

    const endpoint = `http://127.0.0.1:8000/api/static/projects/${id}`;

    const registerChange = (e) => {
        setImage(e.target.files[0])
    }

    const deleteElement = (e) => {
        e.preventDefault();
        AuthorizedCrud('DELETE', endpoint);
        props.history.push('/')
    }


    useEffect(
        () => {

            FreeRequests('GET', endpoint)
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

        let formData = new FormData();
        formData.append('image', image);
        formData.append('name', e.target[0].value)
        formData.append('technologies', e.target[1].value)
        formData.append('source_code',e.target[2].value)
        formData.append('url', e.target[3].value)

        AuthorizedCrud('PATCH', endpoint, formData, null)
        .catch(err => console.log(err));

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

            <input type="file" onChange={registerChange}/>

            <button>Edit</button>
            <br/>
            <button onClick={deleteElement}>Delete</button>
        </form>
    )

}

export default withRouter(ProjectEdit);