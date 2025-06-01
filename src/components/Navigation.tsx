
import { Link, useLocation } from 'react-router-dom';
import { Palette } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Palette className="h-8 w-8 text-rose-500 group-hover:text-rose-600 transition-colors" />
            <span className="font-serif text-xl font-semibold text-gray-900">
              uDesign Dress Creator
            </span>
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                isActive('/') ? 'text-rose-600 border-b-2 border-rose-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/designer"
              className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                isActive('/designer') ? 'text-rose-600 border-b-2 border-rose-600' : 'text-gray-700'
              }`}
            >
              Designer
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                isActive('/about') ? 'text-rose-600 border-b-2 border-rose-600' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                isActive('/contact') ? 'text-rose-600 border-b-2 border-rose-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
