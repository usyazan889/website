import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Square, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAdmin } from '../contexts/AdminContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { siteSettings } = useAdmin();

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Square className="h-8 w-8" style={{ color: siteSettings.primaryColor }} />
              <span className="text-xl font-bold text-gray-900 dark:text-white">{siteSettings.siteName}</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? ''
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  style={{ 
                    color: isActive(item.href) ? siteSettings.primaryColor : undefined,
                    ':hover': { color: siteSettings.primaryColor }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300 transition-colors duration-200"
              style={{ ':hover': { color: siteSettings.primaryColor } }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              className="text-gray-600 dark:text-gray-300 transition-colors duration-200"
              style={{ ':hover': { color: siteSettings.primaryColor } }}
            >
              Login
            </button>
            <button 
              className="text-white px-4 py-2 rounded-lg transition-colors duration-200"
              style={{ 
                backgroundColor: siteSettings.primaryColor,
                ':hover': { backgroundColor: `${siteSettings.primaryColor}dd` }
              }}
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? ''
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  style={{ 
                    color: isActive(item.href) ? siteSettings.primaryColor : undefined,
                    ':hover': { color: siteSettings.primaryColor }
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <button 
                  onClick={toggleDarkMode}
                  className="flex items-center gap-2 w-full text-left text-gray-600 dark:text-gray-300 transition-colors duration-200"
                  style={{ ':hover': { color: siteSettings.primaryColor } }}
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button 
                  className="block w-full text-left text-gray-600 dark:text-gray-300 transition-colors duration-200"
                  style={{ ':hover': { color: siteSettings.primaryColor } }}
                >
                  Login
                </button>
                <button 
                  className="block w-full text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  style={{ 
                    backgroundColor: siteSettings.primaryColor,
                    ':hover': { backgroundColor: `${siteSettings.primaryColor}dd` }
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;