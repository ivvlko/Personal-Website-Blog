import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                <NavLink className={styles.navigationItem} exact to='/' activeClassName={styles.selected}>About</NavLink>
                <NavLink className={styles.navigationItem} exact to='/blog' activeClassName={styles.selected}>Blog</NavLink>
                <NavLink className={styles.navigationItem} exact to='/contact' activeClassName={styles.selected}>Contact</NavLink>
            </ul>

        </nav>
    )

}

export default Navigation;