
import AuthorizedCrud from '../../../services/AuthorizedCrud';

const AddEducation = (props) => {

    const postEndpoint = 'http://127.0.0.1:8000/api/static/education/';

    const handlePostSubmit = (e) =>{
        e.preventDefault();
        let body = JSON.stringify({
            'degree': e.target[0].value,
            'school': e.target[1].value,
            'dates': e.target[2].value,
            'short_description': e.target[3].value,

        });
        AuthorizedCrud("POST", postEndpoint, body);
        props.history.push('/');

    }

    return (
        <form onSubmit={handlePostSubmit}>
            <label>Degress:</label>
            <input type='text' id='name'/>
            <br/>
            <label>School:</label>
            <input type='text' id='technologies'/>
            <br/>
            <label>Dates:</label>
            <input type='text' id='dates'/>
            <br/>
            <label>Description:</label>
            <input type='text' id='desc'/>
            <br/>
            <button>Add</button>

        </form>
    )
}

export default AddEducation;