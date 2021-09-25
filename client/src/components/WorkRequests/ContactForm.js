import 'font-awesome/css/font-awesome.min.css';
import AuthorizedCrud from '../../services/AuthorizedCrud';

const ContactForm = (props) => {

    const FontAwesome = require('react-fontawesome');
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

    const onClichGmail = () => {
        window.alert('PM me on "ivankoevbg@gmail.com"')
    };

    return (
        <div id='ContactPage'>

            <div className='formContacts'>

                <a onClick={onClichGmail} style={{color: 'purple'}} target="_blank">
                    <FontAwesome
                        className="linkedinIcon"
                        name='fab fa-google'
                        size='2x'
                    />
                </a>

                <a href='https://bg.linkedin.com/in/ivan-koev' target="_blank">
                    <FontAwesome
                        className="linkedinIcon"
                        name='fab fa-linkedin'
                        size='2x'
                    />
                </a>

                <a href='https://www.facebook.com/iv.ko.7921' target="_blank">
                    <FontAwesome
                        className="fbIcon"
                        name='fab fa-facebook'
                        size='2x'
                    />
                </a>

                <a href='https://github.com/ivvlko' target="_blank">
                    <FontAwesome
                        className="fbIcon"
                        name='fab fa-github'
                        size='2x'
                    />
                </a>
            </div>
            <h2 style={{textAlign: 'center', marginTop: '50px'}}>Or If You Already Have Something in Mind: </h2>
            <form onSubmit={handleSubmit} className="GeneralForm" className="GeneralForm">
                <h3></h3>
                <label>Type of Work: </label>
                <select name="cars" id="cars">
                    <option value="Website">Website</option>
                    <option value="Machine Learning Model">Machine Learning Model</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Analytical Dashboard">Analytical Dashboard</option>
                    <option value="Data Analysis/Analytics">Data Analysis/Analytics</option>
                </select>
                <br />
                <br />
                <label>Short Description of the Project:</label>
                <textarea></textarea>
                <br />
                <br />
                <label>Soft Deadline:</label>
                <input type='date' />
                <br />
                <label>Budger:</label>
                <input type='number' />
                <br />
                <label>Email:</label>
                <input type='text' />
                <br />
                <label>Phone Number:</label>
                <input type='text' />
                <br />
                <button>Submit</button>
            </form>

        </div>
    )

}

export default ContactForm;