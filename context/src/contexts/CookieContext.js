'use client';
const { createContext, useState } = require("react");

export const CookieContext = createContext();

export function CookieProvider({ children }) {
    const [cookies, setCookies] = useState(0);
    return (
        <CookieContext.Provider value={{ cookies, setCookies }}>
            {children}
        </CookieContext.Provider>
    );
}