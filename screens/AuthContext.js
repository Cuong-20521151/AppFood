import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userId,setUserId] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setCredentials = (newusername, newPassword) => {
        setUsername(newusername);
        setPassword(newPassword);
    }

    return (
        <AuthContext.Provider value={{username, password, setCredentials, isAuthenticated, setIsAuthenticated, userId,setUserId}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => {
    return useContext(AuthContext)
}

export  { AuthProvider, useAuth }