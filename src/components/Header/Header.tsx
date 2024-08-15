import { FaSearch, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState for managing theme state

export default function Header() {
    const [darkMode, setDarkMode] = useState(false); // State to track dark mode

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark', !darkMode);
    };

    return (
        <div className={`flex justify-between items-center shadow-md p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex space-x-8 items-center">
                <Link to="/" className={`text-blue-700 font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                    India Guide
                </Link>
                <Link to="/destination" className={`font-normal hover:text-blue-500 cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
                    Destination
                </Link>
                <Link to="/inspiration" className={`font-normal hover:text-blue-500 cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
                    Inspiration
                </Link>
                <Link to="/posts" className={`font-normal hover:text-blue-500 cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
                    Posts
                </Link>
                <div className={`font-normal hover:text-blue-500 cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
                    Shop
                </div>
            </div>

            <div className="flex space-x-8 items-center">
                <div className={`font-normal hover:text-blue-500 cursor-pointer flex items-center ${darkMode ? 'text-white' : 'text-black'}`}>
                    <FaSearch className="mr-2" />
                    Search
                </div>
                <div className={`font-normal hover:text-blue-500 cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
                    Saves
                </div>
                <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
                <button className={`bg-blue-600 text-white rounded-md shadow px-4 py-2 ${darkMode ? 'bg-blue-800' : 'bg-blue-600'}`}>
                    Sign In
                </button>
            </div>
        </div>
    );
}
