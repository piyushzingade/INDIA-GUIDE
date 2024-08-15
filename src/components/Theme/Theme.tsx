
import { useState, useEffect } from 'react';

export default function Theme() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Load theme from local storage or set default theme
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-black font-normal hover:text-blue-500 cursor-pointer"
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
}
