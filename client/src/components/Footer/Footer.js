import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from 'react';
import LoggedContext from '../Auth/LoggedContext';
import { NavLink, useHistory } from 'react-router-dom';


const Footer = () => {
    
    const { authenticated, setAuthenticated } = useContext(LoggedContext);
    const history = useHistory();

    const handleLogout = () => {
        setAuthenticated(false)
        localStorage.clear();
        history.push("/");
    };

    const FontAwesome = require('react-fontawesome');

    return (
        <footer className="CustomFooter" id='Footer'>
            <span>&copy; <em id="copyElement"></em>by Ivan Koev</span>

            <div className='fontawesomeIcons'>
                <a href='https://bg.linkedin.com/in/ivan-koev' target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href='https://www.facebook.com/iv.ko.7921' target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a href='https://github.com/ivvlko' target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

            {authenticated ? null : <NavLink  exact to='/login' >Login</NavLink>} 
        {authenticated ? <a onClick={handleLogout} >Logout</a>: null} 


        </footer>
    )
}

export default Footer;