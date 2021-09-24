import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useContext } from 'react';
import LoggedContext from '../Auth/LoggedContext';
import { withRouter } from 'react-router';


const Navigation = (props) => {
    const { setAuthenticated } = useContext(LoggedContext);
    const context = useContext(LoggedContext);

    const handleLogout = () => {
        setAuthenticated(false)
        localStorage.clear();
        props.history.push("/");
    };

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                <NavLink className={styles.navigationItem} exact to='/' activeClassName={styles.selected}>About</NavLink>
                <NavLink className={styles.navigationItem} exact to='/blog' activeClassName={styles.selected}>Blog</NavLink>
                <NavLink className={styles.navigationItem} exact to='/contact' activeClassName={styles.selected}>Contact Me</NavLink>
                {(context.authenticated && localStorage.getItem('username') === 'admin') ?
                    <NavLink className={styles.navigationItem} exact to='/work-requests' activeClassName={styles.selected}>Work Requests</NavLink>
                    : null
                }
                {context.authenticated ? null : <NavLink className={styles.navigationItem} exact to='/login' activeClassName={styles.selected}>Login</NavLink>}
                {!context.authenticated ? null : <a onClick={handleLogout} className={styles.navigationItem}>Logout</a>}

            </ul>

        </nav>
    )

}

export default withRouter(Navigation);