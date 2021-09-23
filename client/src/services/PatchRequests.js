function AuthorizedPatchRequests(endpoint, body){

    return fetch(endpoint, {method: 'PATCH', 
                            headers: {  'Authorization': `Bearer ${localStorage.getItem('access')}`, 
                                        'Content-Type': 'application/json'
                                    }, 
                            body: body})
        .then(res => res.json());

}
export default AuthorizedPatchRequests;

