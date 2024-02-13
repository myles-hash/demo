'use client';
import { useContext } from "react";

import { UserContext } from '../contexts/UserContext';
import { ThemeContext } from "@/contexts/ThemeProvider";

export default function UserPage() {
    let { username, setUsername } = useContext(UserContext);
    let {theme, setTheme} = useContext(ThemeContext);

    function hadnleThemeToggle(){
        if (theme === 'light'){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }


    return (
        <div>
    <h2>UserID: {username}</h2>
    <button onClick ={() => setUsername('Myles')}>
        Change username to Myles
    </button>
    <h2>Theme: {theme} </h2>
    <button onClick={hadnleThemeToggle}>
        Chnage theme to dark
    </button>
    </div>)
}