
import AuthorizedCrud from '../../../services/AuthorizedCrud';

const AddProject = (props) => {

    const postEndpoint = 'http://127.0.0.1:8000/api/articles/';


    const handlePostSubmit = (e) =>{
        e.preventDefault();
        let body = JSON.stringify({
            'image_url': e.target[2].value,
            'title': e.target[0].value,
            'text': e.target[1].value
        });
        

        AuthorizedCrud("POST", postEndpoint, body);
        props.history.push('/blog');

    }

    return (
        <form onSubmit={handlePostSubmit}>
            <label>Title:</label>
            <input type='text' id='title'/>

            <label>Text:</label>
            <input type='text' id='technologies'/>

            <input type="text" /> 

            <button>Add</button>

        </form>
    )
}

export default AddProject;