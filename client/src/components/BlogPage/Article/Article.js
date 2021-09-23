import { NavLink } from "react-router-dom";

const Article = (props) => {

    return (

        <article>
            <h2>{props.title}</h2>
            <img src={props.image} alt="article"/>
            <p>{props.text.slice(0, 20)} ...</p>
            <NavLink to={`/blog/article/${props.id}`}>Full Article</NavLink>
        </article>)

}

export default Article;