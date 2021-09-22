import React from 'react';

const LoggedContext = React.createContext({

    authenticated: false,
    setAuthenticated: (auth) => {}
});

export default LoggedContext;
