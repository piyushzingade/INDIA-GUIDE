import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPinterestP
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };


    return (
        <footer className="text-black dark:text-white py-10 px-4 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {/* Branding and Social Media */}
                <div className="col-span-2 flex flex-col space-y-4">
                    <h2 className="font-bold text-lg">{t('indiaGuide')}</h2>
                    <p className="text-sm">{t('explorersEverywhere')}</p>
                    <div className="flex space-x-3">
                        <a href="https://www.facebook.com" className="text-blue-800 dark:text-blue-300 hover:text-gray-300">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://www.instagram.com" className="text-pink-700 dark:text-pink-400 hover:text-gray-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.twitter.com" className="text-blue-700 dark:text-blue-400 hover:text-gray-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://www.youtube.com" className="text-[#FF0000] dark:text-red-600 hover:text-gray-300">
                            <FaYoutube size={20} />
                        </a>
                        <a href="https://www.pinterest.com" className="text-pink-800 dark:text-pink-500 hover:text-gray-300">
                            <FaPinterestP size={20} />
                        </a>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold">{t('subscribe')}</h3>
                        <p>{t('get20Off')}</p>
                        <div className="flex mt-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="p-2 rounded-l-md text-black dark:text-white bg-gray-200 dark:bg-gray-700 focus:outline-none w-full md:w-auto"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
                                {t('subscribe')}
                            </button>
                        </div>
                        <p className="text-xs mt-2">
                            {t('subscribe')} {t('get20Off')}. {t('privacyPolicy')}.
                        </p>
                    </div>
                </div>

                {/* Top Destinations */}
                <div className="flex flex-col">
                    <h3 className="font-bold mb-2">{t('topDestinations')}</h3>
                    <ul className="space-y-1 text-sm">
                        {[
                            "Agra",
                            "Jaipur",
                            "Goa",
                            "Kerala",
                            "Varanasi",
                            "Leh-Ladakh",
                            "Ranthambore",
                            "Rishikesh",
                            "Mysore",
                            "Andaman",
                            "Udaipur",
                            "Hampi",
                            "Amritsar",
                            "Darjeeling",
                            "Sundarbans",
                            "Mumbai",
                            "Delhi",
                            "Kolkata",
                            "Jaisalmer",
                            "Shimla"
                        ].map((destination) => (
                            <li key={destination}>
                                <a href="#" className="hover:underline dark:text-gray-300">
                                    {destination}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#" className="hover:underline dark:text-gray-300">
                                {t('topDestinations')}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Travel Interests */}
                <div className="flex flex-col">
                    <h3 className="font-bold mb-2">{t('travelInterests')}</h3>
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
                    <h3 className="font-bold mb-2">{t('shop')}</h3>
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
                    <h3 className="font-bold mb-2">{t('aboutUs')}</h3>
                    <ul className="space-y-1 text-sm">
                        {['About India Guide', 'Contact Us', 'Trade and Advertising', 'Privacy Policy', 'Terms and Conditions', 'Work For Us', 'Meet the team'].map((aboutItem) => (
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
                    <label className="font-bold text-sm dark:text-gray-300">{t('changeLanguage')}:</label>
                    <select
                        className="p-2 rounded-md text-black dark:text-white bg-gray-200 dark:bg-gray-700 focus:outline-none"
                        defaultValue="en"
                        onChange={handleLanguageChange}
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>
                </div>

                {/* Footer Bottom Links */}
                <div className="flex space-x-4 text-sm mt-4 md:mt-0">
                    <a href="#" className="hover:underline dark:text-gray-300">
                        {t('privacyPolicy')}
                    </a>
                    <a href="#" className="hover:underline dark:text-gray-300">
                        {t('termsOfUse')}
                    </a>
                    <a href="#" className="hover:underline dark:text-gray-300">
                        {t('accessibility')}
                    </a>
                </div>
            </div>
        </footer>
    );
}
