const FreeRequests = (method, endpoint, body) => {

    return fetch(endpoint, {method: method, body: body, headers: {'Content-Type': 'application/json'}})
        .then(res => res.json())
}

export default FreeRequests;