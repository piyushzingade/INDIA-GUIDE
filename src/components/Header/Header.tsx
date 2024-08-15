import { useState } from 'react';
import { FaSearch, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Header() {
    const [darkMode, setDarkMode] = useState(false); // State to track dark mode
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility on smaller screens

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark', !darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`flex justify-between items-center shadow-md p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {/* Logo and Links Section */}
            <div className="flex items-center">
                <Link to="/" className={`font-bold mr-8 ${darkMode ? 'text-white' : 'text-black'}`}>
                    India Guide
                </Link>

                {/* Menu Links for larger screens */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/destination" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>
                        Destination
                    </Link>
                    <Link to="/inspiration" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>
                        Inspiration
                    </Link>
                    <Link to="/posts" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>
                        Posts
                    </Link>
                    <Link to="/shop" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>
                        Shop
                    </Link>
                </nav>
            </div>

            {/* Actions Section */}
            <div className="flex items-center space-x-4">
                {/* Search and Saves for larger screens */}
                <div className="hidden md:flex space-x-4">
                    <div className={`hover:text-blue-500 cursor-pointer flex items-center ${darkMode ? 'text-white' : 'text-black'}`}>
                        <FaSearch className="mr-2" />
                        Search
                    </div>
                    <div className={`hover:text-blue-500 cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
                        Saves
                    </div>
                </div>

                {/* Theme toggle button */}
                <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                {/* Sign In button for larger screens */}
                <Link to="/signin" className={`hidden md:block bg-blue-600 text-white rounded-md shadow px-4 py-2 ${darkMode ? 'bg-blue-800' : 'bg-blue-600'}`}>
                    Sign In
                </Link>

                {/* Hamburger Menu for smaller screens */}
                <button
                    className={`md:hidden flex items-center justify-center ${darkMode ? 'text-white' : 'text-black'}`}
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4 md:hidden`}>
                    <nav className="flex flex-col space-y-4">
                        <Link to="/destination" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>
                            Destination
                        </Link>
                        <Link to="/inspiration" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>
                            Inspiration
                        </Link>
                        <Link to="/posts" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>
                            Posts
                        </Link>
                        <Link to="/shop" className={`hover:text-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>
                            Shop
                        </Link>
                        <div className={`hover:text-blue-500 cursor-pointer flex items-center ${darkMode ? 'text-white' : 'text-black'}`}>
                            <FaSearch className="mr-2" />
                            Search
                        </div>
                        <div className={`hover:text-blue-500 cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
                            Saves
                        </div>
                        <Link to="/signin" className={`bg-blue-600 text-white rounded-md shadow px-4 py-2 w-full ${darkMode ? 'bg-blue-800' : 'bg-blue-600'}`}>
                            Sign In
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
