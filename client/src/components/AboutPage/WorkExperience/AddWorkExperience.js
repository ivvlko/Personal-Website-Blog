
import AuthorizedCrud from '../../../services/AuthorizedCrud';

const AddWorkExperience = (props) => {

    const postEndpoint = 'http://18.156.33.116:80/api/static/work-experience/';

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
            <br/>
            <label>Company:</label>
            <input type='text' id='company'/>
            <br/>
            <label>Dates:</label>
            <input type='text' id='dates'/>
            <br/>
            <label>Responsibilities:</label>
            <input type='text' id='resp'/>
            <br/>
            <button>Add</button>

        </form>
    )
}

export default AddWorkExperience;