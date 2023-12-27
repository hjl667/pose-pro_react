import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Initialize state with value from local storage or default to null
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    useEffect(() => {
        // Whenever token changes, update the local storage
        localStorage.setItem('token', token);
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };

