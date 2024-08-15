// DestinationMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const DestinationMenu = ({ showMenu }) => {
  return (
    <div
      className={`absolute mt-2 bg-white border rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      style={{ minWidth: '400px', top: '100%', left: '0' }}
    >
      <div className="flex">
        {/* Column for Continents */}
        <div className="flex-1 p-4 border-r">
          <h4 className="font-semibold mb-2">Continents</h4>
          <ul className="space-y-1">
            <li><Link to="/destination/africa" className="hover:text-blue-500">Africa</Link></li>
            <li><Link to="/destination/antarctica" className="hover:text-blue-500">Antarctica</Link></li>
            <li><Link to="/destination/asia" className="hover:text-blue-500">Asia</Link></li>
            <li><Link to="/destination/australia-pacific" className="hover:text-blue-500">Australia &amp; the Pacific</Link></li>
            <li><Link to="/destination/caribbean" className="hover:text-blue-500">The Caribbean</Link></li>
            <li><Link to="/destination/central-america" className="hover:text-blue-500">Central America</Link></li>
            <li><Link to="/destination/europe" className="hover:text-blue-500">Europe</Link></li>
            <li><Link to="/destination/middle-east" className="hover:text-blue-500">Middle East</Link></li>
            <li><Link to="/destination/north-america" className="hover:text-blue-500">North America</Link></li>
            <li><Link to="/destination/south-america" className="hover:text-blue-500">South America</Link></li>
          </ul>
        </div>
        {/* Column for Countries */}
        <div className="flex-1 p-4 border-r">
          <h4 className="font-semibold mb-2">Countries</h4>
          <ul className="space-y-1">
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
        {/* Column for Cities */}
        <div className="flex-1 p-4">
          <h4 className="font-semibold mb-2">Cities</h4>
          <ul className="space-y-1">
            <li><Link to="/destination/cairo" className="hover:text-blue-500">Cairo</Link></li>
            <li><Link to="/destination/cape-town" className="hover:text-blue-500">Cape Town</Link></li>
            <li><Link to="/destination/marrakesh" className="hover:text-blue-500">Marrakesh</Link></li>
          </ul>
        </div>
        {/* Image and Additional Links */}
        <div className="flex-1 p-4">
          <img src="https://via.placeholder.com/100x100" alt="Best in Travel" className="rounded mb-2" />
          <h4 className="font-semibold">Best in Travel</h4>
          <p>50 destinations for 50 years of travel</p>
          <Link to="/more-in-africa" className="mt-2 inline-block text-blue-500 hover:underline">
            More in Africa →
          </Link>
        </div>
      </div>
      <div className="p-4">
        <Link to="/all-destinations" className="text-blue-500 hover:underline">
          See all destinations
        </Link>
      </div>
    </div>
  );
};

export default DestinationMenu;
