import { Link, useLocation } from 'react-router-dom';
import { Palette, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Palette className="h-8 w-8 text-gray-800 dark:text-gray-200 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors" />
            <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
              Udesign
            </span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`text-sm font-semibold transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive('/') ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Home
              </Link>
              <Link
                to="/designer"
                className={`text-sm font-semibold transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive('/designer') ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Designer
              </Link>
              <Link
                to="/about"
                className={`text-sm font-semibold transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive('/about') ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-semibold transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive('/contact') ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/auth"
                className={`text-sm font-semibold transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive('/auth') ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                Login / Sign Up
              </Link>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="border-gray-300 dark:border-gray-600"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
