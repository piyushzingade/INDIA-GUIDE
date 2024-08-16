import { Link } from 'react-router-dom';

interface DestinationMenuProps {
    showMenu: boolean;
}

const DestinationMenu: React.FC<DestinationMenuProps> = ({ showMenu }) => {
    return (
        <div
            className={`mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            style={{ minWidth: '600px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(10%)', zIndex: 50 }}
        >
            <div className="flex p-4">
                {/* Continents List */}
                <div className="flex-1">
                    <h4 className="font-semibold text-blue-600">Africa</h4>
                    <ul className="mt-2 space-y-1">
                        <li><Link to="/destination/africa" className="hover:text-blue-500">Africa</Link></li>
                        <li><Link to="/destination/antarctica" className="hover:text-blue-500">Antarctica</Link></li>
                        <li><Link to="/destination/asia" className="hover:text-blue-500">Asia</Link></li>
                        <li><Link to="/destination/australia-pacific" className="hover:text-blue-500">Australia & the Pacific</Link></li>
                        <li><Link to="/destination/caribbean" className="hover:text-blue-500">The Caribbean</Link></li>
                        <li><Link to="/destination/central-america" className="hover:text-blue-500">Central America</Link></li>
                        <li><Link to="/destination/europe" className="hover:text-blue-500">Europe</Link></li>
                        <li><Link to="/destination/middle-east" className="hover:text-blue-500">Middle East</Link></li>
                        <li><Link to="/destination/north-america" className="hover:text-blue-500">North America</Link></li>
                        <li><Link to="/destination/south-america" className="hover:text-blue-500">South America</Link></li>
                    </ul>
                </div>

                {/* Countries List */}
                <div className="flex-1 border-l border-gray-300 dark:border-gray-700 pl-4">
                    <h4 className="font-semibold text-blue-600">Countries</h4>
                    <ul className="mt-2 space-y-1">
                        <li><Link to="/destination/egypt" className="hover:text-blue-500">Egypt</Link></li>
                        <li><Link to="/destination/ghana" className="hover:text-blue-500">Ghana</Link></li>
                        <li><Link to="/destination/kenya" className="hover:text-blue-500">Kenya</Link></li>
                        <li><Link to="/destination/madagascar" className="hover:text-blue-500">Madagascar</Link></li>
                        <li><Link to="/destination/mauritius" className="hover:text-blue-500">Mauritius</Link></li>
                        <li><Link to="/destination/morocco" className="hover:text-blue-500">Morocco</Link></li>
                        <li><Link to="/destination/namibia" className="hover:text-blue-500">Namibia</Link></li>
                        <li><Link to="/destination/south-africa" className="hover:text-blue-500">South Africa</Link></li>
                        <li><Link to="/destination/tanzania" className="hover:text-blue-500">Tanzania</Link></li>
                    </ul>
                </div>

                {/* Cities List */}
                <div className="flex-1 border-l border-gray-300 dark:border-gray-700 pl-4">
                    <h4 className="font-semibold text-blue-600">Cities</h4>
                    <ul className="mt-2 space-y-1">
                        <li><Link to="/destination/cairo" className="hover:text-blue-500">Cairo</Link></li>
                        <li><Link to="/destination/cape-town" className="hover:text-blue-500">Cape Town</Link></li>
                        <li><Link to="/destination/marrakesh" className="hover:text-blue-500">Marrakesh</Link></li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
                <div className="text-blue-600">
                    <Link to="/see-all-destinations" className="hover:underline">See all destinations</Link>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="/images/best-in-travel.jpg" alt="Best in Travel" className="w-12 h-12 rounded-md object-cover" />
                    <div>
                        <div className="font-semibold">Best in Travel</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">50 destinations for 50 years of travel</div>
                    </div>
                </div>
                <div className="text-blue-600">
                    <Link to="/more-in-africa" className="hover:underline">More in Africa →</Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationMenu;
