import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPinterestP
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="text-black dark:text-white py-10 px-4 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {/* Branding and Social Media */}
                <div className="col-span-2 flex flex-col space-y-4">
                    <h2 className="font-bold text-lg">India Guide</h2>
                    <p className="text-sm">For Explorers Everywhere</p>
                    <div className="flex space-x-3">
                        <a
                            href="https://www.facebook.com"
                            className="text-blue-800 dark:text-blue-300 hover:text-gray-300"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            className="text-pink-700 dark:text-pink-400 hover:text-gray-300"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            className="text-blue-700 dark:text-blue-400 hover:text-gray-300"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://www.youtube.com"
                            className="text-[#FF0000] dark:text-red-600 hover:text-gray-300"
                        >
                            <FaYoutube size={20} />
                        </a>
                        <a
                            href="https://www.pinterest.com"
                            className="text-pink-800 dark:text-pink-500 hover:text-gray-300"
                        >
                            <FaPinterestP size={20} />
                        </a>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold">SUBSCRIBE</h3>
                        <p>Get 20% off your first order.</p>
                        <div className="flex mt-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="p-2 rounded-l-md text-black dark:text-white bg-gray-200 dark:bg-gray-700 focus:outline-none w-full md:w-auto"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
                                Subscribe now
                            </button>
                        </div>
                        <p className="text-xs mt-2">
                            Subscribe to Lonely Planet newsletters and promotions. Read our{' '}
                            <a href="#" className="underline hover:text-gray-300 dark:hover:text-gray-400">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>

                {/* Top Destinations */}
                <div className="flex flex-col">
                    <h3 className="font-bold mb-2">TOP DESTINATIONS</h3>
                    <ul className="space-y-1 text-sm">
                        {['New York City', 'Paris', 'Italy', 'Costa Rica', 'Japan', 'USA', 'Amsterdam', 'Portugal', 'Cancún', 'Chicago', 'England', 'Tokyo', 'France', 'Thailand', 'Ireland', 'Rome', 'London', 'Los Angeles', 'Mexico', 'San Francisco'].map((destination) => (
                            <li key={destination}>
                                <a href="#" className="hover:underline dark:text-gray-300">
                                    {destination}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#" className="hover:underline dark:text-gray-300">
                                Explore More Destinations
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Travel Interests */}
                <div className="flex flex-col">
                    <h3 className="font-bold mb-2">TRAVEL INTERESTS</h3>
                    <ul className="space-y-1 text-sm">
                        {['Adventure Travel', 'Art and Culture', 'Beaches, Coasts and Islands', 'Family Holidays', 'Festivals', 'Food and Drink', 'Honeymoon and Romance', 'Road Trips', 'Sustainable Travel', 'Travel on a Budget', 'Wildlife and Nature'].map((interest) => (
                            <li key={interest}>
                                <a href="#" className="hover:underline dark:text-gray-300">
                                    {interest}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Shop */}
                <div className="flex flex-col">
                    <h3 className="font-bold mb-2">SHOP</h3>
                    <ul className="space-y-1 text-sm">
                        {['Destination Guides', 'Lonely Planet Kids', 'Non-English Guides'].map((shopItem) => (
                            <li key={shopItem}>
                                <a href="#" className="hover:underline dark:text-gray-300">
                                    {shopItem}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Us */}
                <div className="flex flex-col">
                    <h3 className="font-bold mb-2">ABOUT US</h3>
                    <ul className="space-y-1 text-sm">
                        {['About Lonely Planet', 'Contact Us', 'Trade and Advertising', 'Privacy Policy', 'Terms and Conditions', 'Work For Us', 'Meet the team'].map((aboutItem) => (
                            <li key={aboutItem}>
                                <a href="#" className="hover:underline dark:text-gray-300">
                                    {aboutItem}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
                {/* Language Selector */}
                <div className="flex items-center space-x-2">
                    <label className="font-bold text-sm dark:text-gray-300">Change your language:</label>
                    <select
                        className="p-2 rounded-md text-black dark:text-white bg-gray-200 dark:bg-gray-700 focus:outline-none"
                        defaultValue="English"
                    >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                    </select>
                </div>

                {/* Footer Bottom Links */}
                <div className="flex space-x-4 text-sm mt-4 md:mt-0">
                    <a href="#" className="hover:underline dark:text-gray-300">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:underline dark:text-gray-300">
                        Terms of Use
                    </a>
                    <a href="#" className="hover:underline dark:text-gray-300">
                        Accessibility
                    </a>
                </div>
            </div>
        </footer>
    );
}
