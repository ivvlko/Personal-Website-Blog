import React from 'react';
import { useContext, useState } from 'react';
import LoggedContext from './LoggedContext';
import { withRouter } from 'react-router';

const Login = ({history}) => {

    const { setAuthenticated } = useContext(LoggedContext);
    const handleLogin = () => setAuthenticated(true);
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const onSubmitLoginForm = (e) => {
        e.preventDefault();
        let user = e.target[0].value;
        let password = e.target[1].value;

        fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": `${user}`, "password": `${password}` })
        })
            .then(res => {
                if (res.status !== 200) {
                    throw Error;
                }
                return res.json()
            })
            .then(data => {
                localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
                localStorage.setItem('username', user);
                handleLogin()
                history.push("/");

            })
            .catch(err => {
                setInvalidCredentials(true);
            })
    }

    return (
        <div>
            <form onSubmit={onSubmitLoginForm}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <input type="submit" value="Login" />
            </form>

            {invalidCredentials ? <span style={{'color': 'red'}}>Invalid Credentials. Please Try Again.</span> : null}
            
        </div>

    )

}


export default withRouter(Login);
