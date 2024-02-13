'use client';
import { useContext } from "react";

import { UserContext } from '../contexts/UserContext';
import { ThemeContext } from "@/contexts/ThemeProvider";
import { CookieContext } from "@/contexts/CookieContext";
import { UpgradeContext } from "@/contexts/UpgradeContext";

export default function UserPage() {
    let { username, setUsername } = useContext(UserContext);
    let {theme, setTheme} = useContext(ThemeContext);
    let {cookies, setCookies} = useContext(CookieContext);
    let {upgradeAmount, setUpgradeAmount, upgradeAmountCount, setUpgradeAmountCount} = useContext(UpgradeContext);
    


    function hadnleThemeToggle(){
        if (theme === 'light'){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

     function handleCookie(){
        if (upgradeAmount > 1){
            setCookies(cookies + (upgradeAmount));
        } else {
        setCookies(cookies + 1);
        }
    }

     function handleUpgrade(){
        if (cookies >= 10) {
            setCookies(cookies - 10);
            setUpgradeAmountCount(upgradeAmountCount + 1);
            if (upgradeAmount === 1){
            setUpgradeAmount(upgradeAmount + 9);
            
            } else {

                setUpgradeAmount(upgradeAmount + 10);
            }
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
    <h2>Cookies: {cookies}</h2>
    <button onClick={handleCookie}>
        +{upgradeAmount} Cookie
    </button>
    <button onClick={handleUpgrade}>
        -10 cookies BUT 
        +10 each click
    </button>
    <p>Amount of upgrades owned: {upgradeAmountCount}</p>
    </div>)
    }