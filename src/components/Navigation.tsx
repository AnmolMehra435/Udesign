import { Link, useLocation } from 'react-router-dom';
import { Palette, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/designer', label: 'Designer' },
    { path: '/about', label: 'About' },
    { path: '/feedback', label: 'Feedback' },
    { path: '/auth', label: 'Login / Sign Up' },
  ];

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                    isActive(link.path) ? 'text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
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

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="border-gray-300 dark:border-gray-600"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden pb-4 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-2 pt-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md ${
                  isActive(link.path)
                    ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
