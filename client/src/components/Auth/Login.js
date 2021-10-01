import React from 'react';
import { useContext, useState } from 'react';
import LoggedContext from './LoggedContext';
import { withRouter } from 'react-router';
import {useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();

    const { setAuthenticated } = useContext(LoggedContext);
    const handleLogin = () => setAuthenticated(true);
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmitLoginForm = (e) => {
        e.preventDefault();
        setLoading(true);
        let user = e.target[0].value;
        let password = e.target[1].value;

        fetch('http://18.156.33.116:80/api/token/', {
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
                setLoading(false);
                handleLogin()
                history.push("/");

            })
            .catch(err => {
                setLoading(false);
                setInvalidCredentials(true);
            })


    }

    return (
        <div id="Login">
            <form onSubmit={onSubmitLoginForm} className="GeneralForm">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <br/>
                <input type="submit" value="Login" />
                <span style={!loading ? {display: 'none'} : {display: 'block'}}>Checking...</span>
            </form>

            {invalidCredentials ? <span style={{'color': 'red'}}>Invalid Credentials. Please Try Again.</span> : null}
            
        </div>

    )

}


export default withRouter(Login);
