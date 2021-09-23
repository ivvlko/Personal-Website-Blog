const getSingleArticle = (id) => {

    return fetch(`http://127.0.0.1:8000/api/articles/${id}`)
        .then(res => res.json())

};

export default getSingleArticle;