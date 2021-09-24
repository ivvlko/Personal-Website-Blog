
import AuthorizedCrud from '../../../services/AuthorizedCrud';

const AddWorkExperience = (props) => {

    const postEndpoint = 'http://127.0.0.1:8000/api/static/work-experience/';

    const handlePostSubmit = (e) =>{
        e.preventDefault();
        let body = JSON.stringify({
            'role': e.target[0].value,
            'company': e.target[1].value,
            'dates': e.target[2].value,
            'short_description': e.target[3].value,

        });
        AuthorizedCrud("POST", postEndpoint, body);
        props.history.push('/');

    }

    return (
        <form onSubmit={handlePostSubmit}>
            <label>Role:</label>
            <input type='text' id='role'/>

            <label>Company:</label>
            <input type='text' id='company'/>

            <label>Dates:</label>
            <input type='text' id='dates'/>

            <label>Responsibilities:</label>
            <input type='text' id='resp'/>

            <button>Add</button>

        </form>
    )
}

export default AddWorkExperience;