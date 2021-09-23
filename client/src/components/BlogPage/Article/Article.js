const Article = (props) => {

    return (

        <article>
            <h2>{props.title}</h2>
            <img src={props.image} alt="article"/>
            <span>{props.dateCreated}</span>
            <p>{props.text}</p>
        </article>)

}

export default Article;