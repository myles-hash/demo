'use client';
const { createContext, useState } = require("react");

export const UpgradeContext = createContext();

export function UpgradeProvider({ children }) {
    const [upgradeAmount, setUpgradeAmount] = useState(1);
    const [upgradeAmountCount, setUpgradeAmountCount] = useState(0);
    return (
        <UpgradeContext.Provider value={{ upgradeAmount, setUpgradeAmount, upgradeAmountCount, setUpgradeAmountCount }}>
            {children}
        </UpgradeContext.Provider>
    );
}