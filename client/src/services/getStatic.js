let baseStaticUrl = 'http://127.0.0.1:8000/api/static/';

function getStaticEndpoint(particularEndpoint){
    return fetch(baseStaticUrl + particularEndpoint)
            .then(res => res.json());
}

export default getStaticEndpoint