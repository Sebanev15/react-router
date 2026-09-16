import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "theme-mode";
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem(STORAGE_KEY);
        return storedMode === "dark";
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleTheme = () => setDarkMode((prevMode) => !prevMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);