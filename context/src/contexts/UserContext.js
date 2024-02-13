'use client';
const { createContext, useState } = require("react");

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [username, setUsername] = useState('bob');
    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
}