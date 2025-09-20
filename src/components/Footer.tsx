import React from 'react';
import { Square, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Square className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold">VEXTRONIC</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
              Leading digital services company delivering cutting-edge solutions for businesses worldwide. From development to design, AI to cybersecurity - we transform ideas into reality.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors duration-200">Programming & Development</Link></li>
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors duration-200">Design & Creative</Link></li>
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors duration-200">AI & Data</Link></li>
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors duration-200">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors duration-200">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors duration-200">Hosting & Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors duration-200">Future Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
              <li><Link to="/about" className="hover:text-emerald-600 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-emerald-600 transition-colors duration-200">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-600 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
              <li>📧 hello@vextronic.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <p className="text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
            © 2024 Vextronic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 dark:text-gray-300 text-sm hover:text-emerald-600 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 dark:text-gray-300 text-sm hover:text-emerald-600 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;