import AuthorizedCrud from '../../services/AuthorizedCrud';

const ContactForm = (props) => {

    const endpoint = 'http://127.0.0.1:8000/api/work-request/';

    const handleSubmit = (e) => {

        e.preventDefault();

        let body = JSON.stringify({
            'type_of_work': e.target[0].value,
            'short_description': e.target[1].value,
            'expected_to_be_done_until': e.target[2].value,
            'budget': e.target[3].value,
            'email': e.target[4].value,
            'phone_number': e.target[5].value,
        })

        AuthorizedCrud('POST', endpoint, body)
        props.history.push('/');

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Type of Work: </label>
            <select name="cars" id="cars">
                <option value="Website">Website</option>
                <option value="Machine Learning Model">Machine Learning Model</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Analytical Dashboard">Analytical Dashboard</option>
                <option value="Data Analysis/Analytics">Data Analysis/Analytics</option>
            </select>
            <label>Short Description of the Project:</label>
            <textarea></textarea>

            <label>Soft Deadline:</label>
            <input type='date' />

            <label>Budger:</label>
            <input type='number' />

            <label>Email:</label>
            <input type='text' />

            <label>Phone Number:</label>
            <input type='text' />

            <button>Submit</button>
        </form>
    )
}

export default ContactForm;