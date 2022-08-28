import 'font-awesome/css/font-awesome.min.css';
import { faFacebook, faGoogle, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AuthorizedCrud from '../../services/AuthorizedCrud';

const ContactForm = (props) => {

    const FontAwesome = require('react-fontawesome');
    const endpoint = 'http://3.70.84.152:80/api/work-request/';

    const handleSubmit = (e) => {

        e.preventDefault();

        let body = JSON.stringify({
            'type_of_work': e.target[0].value,
            'short_description': e.target[1].value,
            'expected_to_be_done_until': e.target[2].value,
            'budget': 42,
            'email': e.target[3].value,
            'phone_number': e.target[4].value,
        })

        AuthorizedCrud('POST', endpoint, body)
            .then(data => {
                const success = 'id' in data;
                if(!success){
                    
                    Object.keys(data).map((x) => {
                        let unfilledInput = document.getElementById(x);
                        let warning = document.getElementById('warningSpan');
                        warning.style.display = 'block';
                        unfilledInput.style.borderBlockColor = "red";
                        unfilledInput.style.borderBlockWidth = '5px';
                        setTimeout(() => {
                            warning.style.display= 'none';
                        }, 2000);
                    })
                }else{
                    let success = document.getElementById('successSpan');
                    success.style.display = 'block';
                    setTimeout(() => {
                        props.history.push('/');
                    }, 3000);
                }
            });

    }

    const onClichGmail = () => {
        window.alert('PM me on "ivankoevbg@gmail.com"')
    };

    return (
        <div id='ContactPage'>

            <div className='formContacts'>

                <a onClick={onClichGmail} style={{color: 'purple'}} target="_blank">
                <FontAwesomeIcon icon={faGoogle} />
                </a>

                <a href='https://bg.linkedin.com/in/ivan-koev' target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>

               


                <a href='https://www.facebook.com/iv.ko.7921' target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <i class="fab fa-facebook-square"></i>
                <a href='https://github.com/ivvlko' target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <h2 style={{textAlign: 'center', marginTop: '50px'}}>Or If You're Ready to Talk Work Directly: </h2>
            <form onSubmit={handleSubmit} className="GeneralForm" className="GeneralForm">
                <h3></h3>
                <label>Type of Work: </label>
                <select  id="types">
                    <option value="Website">Website</option>
                    <option value="Machine Learning Model">Machine Learning Model</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Analytical Dashboard">Analytical Dashboard</option>
                    <option value="Data Analysis/Analytics">Data Analysis/Analytics</option>
                </select>
                <br />
                <br />
                <label>Short Description of the Project:</label>
                <textarea id='short_description'></textarea>
                <br />
                <br />
                <label>Soft Deadline:</label>
                <input type='date' id='expected_to_be_done_until' />
                <br />
                <br />
                <label>Email:</label>
                <input types='email' id='email' />
                <br />
                <label>Phone Number:</label>
                <input type='text' id='phone_number' />
                <br />
                <span id= 'warningSpan' style={{display: 'none', color: 'red', marginTop: '10px', marginBottom:'10px'}}>Please Fill In the Inputs</span>
                <span id= 'successSpan' style={{display: 'none', color: 'green', marginTop: '10px', marginBottom:'10px'}}>Thank You, Will Reach Out Soon!</span>
                <button>Submit</button>
            </form>

        </div>
    )

}

export default ContactForm;