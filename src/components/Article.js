function Article(props){
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.dateArt}</small>
            <p>{props.Para}</p>
        </article>
    )
}
export default Article;