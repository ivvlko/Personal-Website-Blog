
import AuthorizedCrud from '../../../services/AuthorizedCrud';
import {useState} from 'react';

const AddProject = (props) => {

    const postEndpoint = 'http://127.0.0.1:8000/api/static/projects/';

    const [image, setImage] = useState('');
    
    const registerChange = (e) => {
        setImage(e.target.files[0])
    }

    const handlePostSubmit = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('image', image);
        formData.append('name', e.target[0].value)
        formData.append('technologies', e.target[2].value)
        formData.append('source_code',e.target[3].value)
        formData.append('url', e.target[4].value)

        AuthorizedCrud("POST", postEndpoint, formData, null);
        props.history.push('/');

    }

    return (
        <form onSubmit={handlePostSubmit} className="GeneralForm">
            <label>Name:</label>
            <input type='text' id='name'/>
            <br/>
            <label>Image:</label>
            <input type='file' id='name' onChange={registerChange}/>
            <br/>
            <label>Technologies:</label>
            <input type='text' id='technologies'/>
            <br/>
            <label>Source Code:</label>
            <input type='text' id='source_code'/>
            <br/>
            <label>URL:</label>
            <input type='text' id='url'/>
            <br/>
            <button>Add</button>

        </form>
    )
}

export default AddProject;