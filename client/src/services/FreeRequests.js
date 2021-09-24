const FreeRequests = (method, endpoint, body) => {

    return fetch(endpoint, {method: method, body: body})
        .then(res => res.json())
}

export default FreeRequests;