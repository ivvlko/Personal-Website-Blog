const refreshToken = () => {
    return fetch('http://18.156.33.116:80/api/token/refresh/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'refresh': localStorage.getItem('refresh')})
    })
        .then(res => res.json())
        .then(res => localStorage.setItem('access', res.access))
};


export default refreshToken;