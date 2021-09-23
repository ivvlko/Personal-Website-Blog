const getArticles = () => {

    return fetch('http://127.0.0.1:8000/api/articles/')
        .then(res => res.json())
}

export default getArticles;