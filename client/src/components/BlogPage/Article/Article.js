import { useContext } from 'react';
import LoggedContext from '../../Auth/LoggedContext';
import { NavLink } from "react-router-dom";

const Article = (props) => {

    const {authenticated} = useContext(LoggedContext)

    return (

        <article>
            <h2>{props.title}</h2>
            <img src={props.image} alt="article"/>
            <p>{props.text.slice(0, 20)} ...</p>
            <NavLink to={`/blog/article/${props.id}`}>Full Article</NavLink>
            {(authenticated && localStorage.getItem('username') === 'admin') ? <NavLink to={`/edit/articles/${props.id}`}>Edit</NavLink> : null}
        </article>)

}

export default Article;