import { useContext } from 'react';
import LoggedContext from '../../Auth/LoggedContext';
import { NavLink } from "react-router-dom";
import styles from './Article.module.css';

const Article = (props) => {

    const {authenticated} = useContext(LoggedContext)

    return (

        <article className={styles.MyArticle}>
            <h2>{props.title}</h2>
            <img src={props.image} alt="article"/>
            <p>{props.text.slice(0, 300)} ...</p>
            <NavLink className={styles.button} to={`/blog/article/${props.id}`}>Full Article</NavLink>
            {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink className='EditButton' to={`/edit/articles/${props.id}`}>Edit</NavLink> : null}
        </article>)

}

export default Article;