const AuthorizedCrud = (method, endpoint, body, contentType = 'application/json') => {

    // Checks if there is content Type if its null it means its FormData and we don't need content type;
    let headers = {
        'Authorization': `Bearer ${localStorage.getItem('access')}`,
        'Content-Type': contentType
    }
    if (contentType === null) {
         headers = {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    }

    return fetch(endpoint, {
        method: method,
        headers: headers,
        body: body
    })
        .then(res => res.json())

}

export default AuthorizedCrud;