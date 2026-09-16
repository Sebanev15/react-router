import {createContext, useContext, useEffect, useRef, useState} from "react";

const ThemeContext = createContext();

const STORAGE_KEY = "theme-mode";

const getSystemPrefersDark = () =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem(STORAGE_KEY);
        if (storedMode) return storedMode === "dark";
        return getSystemPrefersDark();
    });

    // Recuerda si el tema actual viene de una elección manual del usuario
    // o de la preferencia del sistema, sin depender de localStorage (que se
    // reescribe en cada render de todos modos).
    const isManualRef = useRef(localStorage.getItem(STORAGE_KEY) !== null);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, darkMode ? "dark" : "light");
    }, [darkMode]);

    // Mientras el usuario no elija un tema manualmente, seguir el del sistema operativo cuando cambie.
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (event) => {
            if (!isManualRef.current) {
                setDarkMode(event.matches);
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = () => {
        isManualRef.current = true;
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);