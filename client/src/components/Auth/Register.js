import FreeRequests from "../../services/FreeRequests";

const Registration = (props) => {

    const endpoint = 'http://127.0.0.1:8000/auth/registration/';

    const submitForm = (e) => {

        e.preventDefault();
        const body = JSON.stringify({
            "username": e.target[0].value,
            "email": e.target[1].value,
            "password1": e.target[2].value,
            "password2": e.target[3].value,
        })

        FreeRequests('POST', endpoint, body);
        props.history.push('/login');
    };

    return (
        <form onSubmit={submitForm}>

            <label>Username:</label>
            <input type='text' />
            <br />
            <label>Email:</label>
            <input type='email' />
            <br />
            <label>Password:</label>
            <input type='password' />
            <br />
            <label>Confirm Password:</label>
            <input type='password' />
            <br />
            <button>Submit</button>
        </form>
    )

}

export default Registration;